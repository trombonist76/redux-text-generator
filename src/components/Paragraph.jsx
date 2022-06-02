import React from 'react'

export default function Paragraph({children,includeHtml}) {
  return (
      includeHtml 
        ? <p>{`<p>${children}</p>`}</p>
        : <p>{children}</p>
  )
}

