import "./tools.css"
import React from "react"
import { Tool } from "./Tool"
import { tools } from "./toolsData"

const ToolsPage = () => {
  return (
    <div className='toolsContainer'>
      <section className='toolsList'>
        {tools.map((tool) => {
          console.log(tool)
          return (
            <Tool
              toolName={tool.toolName}
              link={tool.link}
              image={tool.image}
              key={tool.id}
            />
          )
        })}
      </section>
    </div>
  )
}
export default ToolsPage
