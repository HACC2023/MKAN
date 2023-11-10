import React from "react"

export const Tool = ({ toolName, link, image, description }) => {
  const handleClick = () => {
    window.open(link)
  }

  return (
    <article className='toolCard' onClick={handleClick}>
      <img src={image} alt={toolName} />
      <h1>{toolName}</h1>
      <p>{description}</p>
      <a href={link}>Visit tool</a>
    </article>
  )
}
