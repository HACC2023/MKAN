import "./tools.css"
import React from "react"
import { Tool } from "./Tool"
import { tools } from "./toolsData"
import { Link } from "react-router-dom"

const ToolsPage = () => {
  return (
    <div className='toolsContainer'>
      <section className='toolsHeader'>
        <Link to='/' className='homeButton'>
          ← Home
        </Link>
        <h1 className='toolsTitle'>
          Tools
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/b/ba/Tools_icon.png'
            alt='tool symbol'
          />
        </h1>
      </section>
      <section className='toolDesc'>
        <p className='toolDescContent'>Welcome to the tools page!</p>
        <p>
          Here you can find a variety of tools to aid you in the task of
          rebuilding Lahaina
        </p>
      </section>
      <section className='toolsList'>
        {tools.map((tool) => {
          return (
            <Tool
              toolName={tool.toolName}
              link={tool.link}
              image={tool.image}
              description={tool.description}
              key={tool.id}
            />
          )
        })}
      </section>
    </div>
  )
}
export default ToolsPage
