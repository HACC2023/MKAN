import React, { useState, useEffect } from "react"
const Page2 = () => {
  const [showResults1, setShowResults1] = useState(false)
  const [surveyResults1, setSurveyResults1] = useState([])
  const googleSheetsLink1 =
    "https://docs.google.com/spreadsheets/d/1sSL19nzsRVO1ku-299b81UPqqi7WL8ehTHqw1jYM614"
  const [showResults2, setShowResults2] = useState(false)
  const [surveyResults2, setSurveyResults2] = useState([])
  const googleSheetsLink2 =
    "https://docs.google.com/spreadsheets/d/1WHgGw47pR1xlJMJ5sye9NF9mVjJXShrwfKWhTO1yn5o"
  useEffect(() => {
    if (showResults1) {
      // Preprocess the data for survey 1
      const processedData1 = preprocessData(surveyResults1)
      setSurveyResults1(processedData1)
    }
    if (showResults2) {
      // Preprocess the data for survey 2
      const processedData2 = preprocessData(surveyResults2)
      setSurveyResults2(processedData2)
    }
  }, [showResults1, showResults2, surveyResults1, surveyResults2])
  const containerStyle = {
    textAlign: "center",
    padding: "20px",
  }
  const headerStyle = {
    fontSize: "36px",
    color: "#333",
  }
  const paragraphStyle = {
    fontSize: "18px",
    color: "#555",
    marginBottom: "20px",
  }
  const linkStyle = {
    backgroundColor: "#ECECEC",
    color: "#333",
    padding: "10px",
    textDecoration: "none",
    borderRadius: "5px",
    display: "block",
    marginBottom: "10px",
    transition: "background-color 0.2s",
  }
  const preprocessData = (data) => {
    const rows = data.map((row) => {
      return row.map((column) => column.replace(/^"|"$/g, ""))
    })
    return rows
  }
  const fetchSurveyResults = async (
    googleSheetsLink,
    setSurveyResults,
    setShowResults
  ) => {
    try {
      const response = await fetch(`${googleSheetsLink}/gviz/tq?tqx=out:csv`)
      if (response.ok) {
        const data = await response.text()
        const rows = data.split("\n").map((row) => row.split(","))
        setSurveyResults(rows)
        setShowResults(true)
      } else {
        console.error("Failed to fetch survey results")
      }
    } catch (error) {
      console.error("Error fetching survey results:", error)
    }
  }
  const participateSurvey1 = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSfxAVWCEolp43_-fUoToEsTvwdj6AqVVGXDuNh4M7xvdRw_5Q/viewform?usp=sf_link",
      "_blank"
    )
  }
  const participateSurvey2 = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSfYEKFfCTNW4XUqvh_5MNe7p6V7i0vqJ188jR8UX1B6a048vQ/viewform?usp=pp_url",
      "_blank"
    )
  }
  return (
    <div className='container' style={containerStyle}>
      <h1 style={headerStyle}>Lahaina Surveys</h1>
      <p style={paragraphStyle}>Please select an option:</p>
      <div className='options'>
        <button onClick={participateSurvey1} style={linkStyle}>
          Participate in the Rebuilding Priorities Survey
        </button>
        <br />
        <button
          onClick={() =>
            fetchSurveyResults(
              googleSheetsLink1,
              setSurveyResults1,
              setShowResults1
            )
          }
          style={linkStyle}
        >
          View Responses for Survey 1
        </button>
        {showResults1 ? (
          <div className='results-section'>
            <h2>Survey 1 Responses</h2>
            <table>
              <thead>
                {surveyResults1[0].map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </thead>
              <tbody>
                {surveyResults1.slice(1).map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        style={{
                          padding: "5px 10px",
                          border: "1px solid #ccc",
                        }}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : null}
        <button onClick={participateSurvey2} style={linkStyle}>
          Participate in the Lahaina Community Input Survey
        </button>
        <br />
        <button
          onClick={() =>
            fetchSurveyResults(
              googleSheetsLink2,
              setSurveyResults2,
              setShowResults2
            )
          }
          style={linkStyle}
        >
          View Responses for Survey 2
        </button>
        {showResults2 ? (
          <div className='results-section'>
            <h2>Survey 2 Responses</h2>
            <table>
              <thead>
                {surveyResults2[0].map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </thead>
              <tbody>
                {surveyResults2.slice(1).map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        style={{
                          padding: "5px 10px",
                          border: "1px solid #ccc",
                        }}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : null}
      </div>
    </div>
  )
}
export default Page2
