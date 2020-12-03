import React, { useState } from "react"

const Question = (props) => {
  const [isColapsed, setIsColapsed] = useState(true)
  const { question, answer } = props
  return (
    <div className="question">
      <h3>{question}</h3>
      <p className={(!isColapsed && "show") || null}>{answer}</p>
      <button className="btn" onClick={() => setIsColapsed(!isColapsed)}>
        {isColapsed ? "+" : "-"}
      </button>
    </div>
  )
}

export default Question
