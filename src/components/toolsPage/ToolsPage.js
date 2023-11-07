import "./tools.css"

const ToolsPage = () => {
  return (
    <div className='toolsContainer'>
      <section className='toolsList'>
        {tools.map((tool) => {
          return <Tool {...tools} key={tool.id} />
        })}
      </section>
    </div>
  )
}

const Tool = ({ toolName, link, image }) => {
  return (
    <article className='tool'>
      <img src={image} alt={toolName} />
      <h2>{toolName}</h2>
      <h4>{link}</h4>
    </article>
  )
}

const tools = [
  {
    toolName: "tool 1",
    link: "link",
    image: "image",
    id: 1,
  },
  {
    toolName: "tool 2",
    link: "link",
    image: "image",
    id: 2,
  },
  {
    toolName: "tool 3",
    link: "link",
    image: "image",
    id: 3,
  },
]
export default ToolsPage
