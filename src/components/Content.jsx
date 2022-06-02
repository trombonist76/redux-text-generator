import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getParagraphs } from "../redux/textSlice";
import Paragraph from "./Paragraph";

export default function Content() {
  const paragraphCount = useSelector((state) => state.text.paragraphCount);
  const paragraph = useSelector((state) => state.text.paragraph);
  const includeHtml = useSelector((state) => state.text.includeHtml);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getParagraphs(paragraphCount))
  }, [paragraphCount, dispatch])

  return(

    <main>
      {paragraph.text.map((p, index) => (
        <Paragraph key={index} includeHtml={includeHtml}>{p}</Paragraph>
      ))}
    </main>

  )
}
