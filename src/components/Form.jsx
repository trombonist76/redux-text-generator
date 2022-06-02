import {AiOutlinePlus,AiOutlineMinus} from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux'
import { changeValueFromInput, decreaseValue, increaseValue, setIncludeHtml } from '../redux/textSlice'

export default function Form() {
    const dispatch = useDispatch()
    const count = useSelector(state => state.text.paragraphCount)
    const html = useSelector(state => state.text.includeHtml)
     

    const handleChange = (e) => {
        dispatch(changeValueFromInput(e.target.value))
    }

    const handleHtml = () => {
        dispatch(setIncludeHtml())
    }

    const increase = () => {
        dispatch(increaseValue())

    }

    const decrease = () => {
        dispatch(decreaseValue())
    }


  return (
    <div className='form'>
        <div className='paragraphCount'>
            <label htmlFor="paragraph">Paragraph</label>
            <div className="input">
                <button onClick={increase} className="increase"><AiOutlinePlus/></button>
                <input onChange={handleChange} value={count} type="number"/>
                <button onClick={decrease} className="decrease"><AiOutlineMinus/></button>
            </div>
            
        </div>

        <div className='exHtml'>
            <label htmlFor="exHtml">Include HTML</label>
            <div onClick={handleHtml} className="switch">
                <div  className={`toggle ${html?"active":""}`}></div>
            </div>
        </div>
    </div>
  )
}
