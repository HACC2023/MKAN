import React from "react"
import { Link } from "react-router-dom"

function Page1() {
  return (
    <div>
      <div className='header'>
        <h1 className='header-title'>What Happened in Lahaina?</h1>
        <div className='header-search'>
          <input type='text' placeholder='Search' />
          <button className='search-button'>Search</button>
        </div>
      </div>

      <div className='layout-container'>
        <div className='sidebar'>
          <h2>Sidebar</h2>
          <ul>
            <li>
              <Link to='/Page2'>Surveys</Link>
            </li>
            <li>
              <Link to='/Tools'>Tools</Link>
            </li>
            <li>
              <Link to='/'>Home</Link>
            </li>
          </ul>
        </div>

        <div className='main-content'>
          <div className='center-content'>
            <h1>What Happened in Lahaina?</h1>

            <p>
              Recently, there have been some significant events in Lahaina that
              have captured the attention of locals and visitors alike. To learn
              more about what happened, you can check the following links:
            </p>

            <ul>
              <li>
                <a
                  href='https://en.wikipedia.org/wiki/Lahaina,_Hawaii'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Wikipedia
                </a>
              </li>
              <li>
                <a
                  href='https://lahainatown.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Lahaina News
                </a>
              </li>
              <li>
                <a
                  href='https://www.gohawaii.com/islands/maui/regions/west-maui/Lahaina'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Lahaina Fire Updates
                </a>
              </li>
              <li>
                <a
                  href='https://www.civilbeat.org/2023/10/maui-fires-your-questions-answered/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  FAQ
                </a>
              </li>
            </ul>

            <p>
              Stay informed and discover more about Lahaina's history, culture,
              community, and ways you can help.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page1
