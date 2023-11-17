import React from "react"
import "./style.css" /* ./style.css */
import { Link } from "react-router-dom"
import ReactDOM from "react-dom"
import { createRoot } from "react-dom/client"
import Posts from "./components/Posts"

const Layout = () => {
  const handleLogin = () => {
    // Add your login logic here
    console.log("Login button clicked")
    // For example, you can navigate to a login page using React Router:
    // history.push('/login');
  }
  return (
    <div>
      <header className='header'>
        <h1 className='header-title'>Lahaina Outreach</h1>
        <div className='header-search'>
          <input type='text' placeholder='Search...' /> {/* Search input */}
          <button className='search-button'>Search</button>{" "}
          {/* Search button */}
        </div>
        <Link to='/login'>
          <button id='loginButton'>Login</button>{" "}
          {/* Link to the new login page */}
        </Link>
      </header>
      <div className='layout-container'>
        <aside className='sidebar'>
          <h2>Explore</h2>
          <ul>
            <li>
              <Link to='/Page1'>Additional Information</Link>
            </li>
            <li>
              <Link to='/Page2'>Surveys</Link>
            </li>
            <li>
              <Link to='/Tools'>Tools</Link>
            </li>
          </ul>
        </aside>
        <aside>
          <div className='communities'>
            <h2>Communities</h2>
            <ul>
              <li>
                <a href='#'>Community 1</a>
              </li>
              <li>
                <a href='#'>Community 2</a>
              </li>
              <li>
                <a href='#'>Community 3</a>
              </li>
              {/* Add more Community items here */}
            </ul>
          </div>
        </aside>

        <main className='main-content'>
          <Posts /> {/* Display the Post component */}
          {/* Add more posts here */}
        </main>

        <aside className='trending-subscriptions'>
          <div className='subscriptions'>
            <h2>Subscriptions</h2>
            <ul>
              <li>
                <a href='#'>Subscription 1</a>
              </li>
              <li>
                <a href='#'>Subscription 2</a>
              </li>
              <li>
                <a href='#'>Subscription 3</a>
              </li>
              {/* Add more subscription items here */}
            </ul>
          </div>

          <div className='trending'>
            <h2>Trending</h2>
            <ul>
              <li>
                <a href='#'>Trending Topic 1</a>
              </li>
              <li>
                <a href='#'>Trending Topic 2</a>
              </li>
              <li>
                <a href='#'>Trending Topic 3</a>
              </li>
              {/* Add more trending topics here */}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default Layout
