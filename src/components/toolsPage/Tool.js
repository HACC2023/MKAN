import React from "react"

export const Tool = ({ toolName, link, image }) => {
  return (
    <article className='tool'>
      <img src={image} alt={toolName} />
      <h2>{toolName}</h2>
      <h4>{link}</h4>
    </article>
  )
}
