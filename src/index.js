import React from "react"
import ReactDOM from "react-dom/client"
import "./style.css"
import Layout from "./Layout" // Import the RedditLayout component
import reportWebVitals from "./a/reportWebVitals"
import { BrowserRouter } from "react-router-dom"

import { Route, Routes } from "react-router-dom"
import Page1 from "./components/Page1"
import Page2 from "./components/Page2"
import Page3 from "./components/Page3"
import LoginForm from "./components/LoginForm"
import NotFound from "./components/NotFound"
import ToolsPage from "./components/toolsPage/ToolsPage"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Layout />} />
      <Route path='/Page1' element={<Page1 />} />
      <Route path='/Page2' element={<Page2 />} />
      <Route path='/Tools' element={<ToolsPage />} />
      <Route path='/login' element={<LoginForm />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>
)

reportWebVitals()
