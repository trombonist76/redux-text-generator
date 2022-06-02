import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getParagraphs = createAsyncThunk("textSlice/getParagraphs",async (paragraphCount) => {
    
    const url =  `${process.env.REACT_APP_BASE_ENDPOINT}&paras=${paragraphCount}&start-with-lorem=1` 
    console.log(url)
    const response = await axios(url)
    return await response.data
})

const textSlice = createSlice({
    name: "textSlice",
    initialState: {
        paragraphCount: 1,
        includeHtml: false, 
        paragraph: {
            text:[],
            loading:"idle",
            error:false
        }
    },
    reducers: {
        increaseValue: (state) => {
            const value = Math.min(100, Math.max(state.paragraphCount + 1, 1))
            state.paragraphCount = value

        },
        
        decreaseValue: (state) => {
            const value = Math.min(100, Math.max(state.paragraphCount - 1, 1))
            state.paragraphCount = value

        },

        changeValueFromInput: (state,action) => {
            const value = Math.min(100, Math.max(action.payload, 1))
            state.paragraphCount = value

        },

        setIncludeHtml: (state) => {
            state.includeHtml = !state.includeHtml

        }
    },
    extraReducers:{
        [getParagraphs.fulfilled] : (state,action) => {
            console.log(action.payload)
            state.paragraph.text = action.payload
            state.paragraph.loading = "fulfilled"
        },
        [getParagraphs.pending] : (state) => {
            state.paragraph.loading = "loading"
        },

        [getParagraphs.rejected] : (state,action) => {
            state.paragraph.error = action.error.message
            state.paragraph.loading = "error"
        },
    }
})

export const {increaseValue,decreaseValue,changeValueFromInput,setIncludeHtml} = textSlice.actions
export default textSlice.reducer