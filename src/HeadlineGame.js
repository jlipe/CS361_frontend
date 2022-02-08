import React, {useEffect, useState} from 'react'
import HeadlineOptions from './HeadlinesOptions'
import HeadlineQuestion from './HeadlineQuestion'
import ResultPage from './ResultPage'
import axios from 'axios'

const HeadlineGame = () => {
  const [queryParams, setQueryParams] = useState(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1)
  const [headlines, setHeadlines] = useState([])
  const [nCorrect, setNCorrect] = useState(0)
  const [gameState, setGameState] = useState("options")

  const handleOptionsSubmit = (options, articleLimit) => {
    const commaSeperatedOptions = options.join(",")
    setQueryParams({ sources: commaSeperatedOptions, limit: articleLimit})
    setCurrentQuestionIndex(0)
  }

  useEffect(() => {
    if (!queryParams) {
      return
    }
    setGameState("loading")
    axios.get("https://s9goa8paxj.execute-api.us-east-1.amazonaws.com/headlines/quiz", { params: queryParams })
      .then(response => {
        setHeadlines(response.data.items)
        setGameState("playing")
      })
  }, [queryParams])

  const handleAnswerSubmit = (answer) => {
    if (answer === headlines[currentQuestionIndex].source) {
      alert("correct")
      setNCorrect(nCorrect + 1)
    } else {
      alert("Not correct")
    }
    if (currentQuestionIndex + 1 === headlines.length) {
      setGameState("results")
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
  }

  const potentialAnswers = queryParams && queryParams.sources.split(",")

  return (
    <div>
      <h1>
        Headline Game
      </h1>
      {gameState === "loading" && <h3>Loading...</h3>}
      {gameState === "options" && <HeadlineOptions handleOptionsSubmit={handleOptionsSubmit}/>}
      {gameState === "playing" && <div><h3>Question {currentQuestionIndex + 1} out of {headlines.length}</h3></div>}
      {gameState === "playing" && <HeadlineQuestion headline={headlines[currentQuestionIndex]} potentialAnswers={potentialAnswers} onSubmit={handleAnswerSubmit} />}
      {gameState === "results" && <ResultPage nAsked={headlines.length} nCorrect={nCorrect} />}
    </div>
  )
}

export default HeadlineGame