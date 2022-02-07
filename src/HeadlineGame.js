import React, {useEffect, useState} from 'react'
import HeadlineOptions from './HeadlinesOptions'
import HeadlineQuestion from './HeadlineQuestion'
import axios from 'axios'

const HeadlineGame = () => {
  const [newsSources, setNewsSources] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1)
  const [headlines, setHeadlines] = useState([])

  const handleOptionsSubmit = (options) => {
    setNewsSources(options)
    setCurrentQuestionIndex(0)
  }

  useEffect(() => {
    if (newsSources.length === 0) {
      return
    }
    const commaSeperatedParams = newsSources.join(",")
    axios.get("https://s9goa8paxj.execute-api.us-east-1.amazonaws.com/headlines/quiz", { params: { sources: commaSeperatedParams, limit: 5 }})
      .then(response => {
        setHeadlines(response.data.items)
      })
  }, [newsSources])

  const handleAnswerSubmit = (answer) => {
    if (answer === headlines[currentQuestionIndex].source) {
      alert("correct")
    } else {
      alert("Not correct")
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1)
  }

  return (
    <div>
      <h1>
        Headline Game
      </h1>
      {newsSources.length === 0 && <HeadlineOptions handleOptionsSubmit={handleOptionsSubmit}/>}
      {currentQuestionIndex !== -1 && <HeadlineQuestion headline={headlines[currentQuestionIndex]} potentialAnswers={newsSources} onSubmit={handleAnswerSubmit} />}
    </div>
  )
}

export default HeadlineGame