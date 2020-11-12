import React from "react"
import Question from "./Question"
import { questions } from "./questions"

function App() {
  return (
    <div className="content">
      <h2>Questions And Answers About Login</h2>
      <div className="questions">
        {questions.map((elem) => {
          return <Question {...elem} key={elem.id} />
        })}
      </div>
    </div>
  )
}

export default App
