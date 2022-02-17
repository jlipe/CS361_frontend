import React, {useState} from 'react'
import HeadlineOptions from './HeadlinesOptions'
import HeadlineQuestion from './HeadlineQuestion'
import ResultPage from './ResultPage'
import axios from 'axios'

const HeadlineGame = () => {
  const [options, setOptions] = useState({})
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1)
  const [headlines, setHeadlines] = useState([])
  const [nCorrect, setNCorrect] = useState(0)
  const [gameState, setGameState] = useState("options")

  const getHeadlines = async (params) => {
    const response = await axios.get("https://s9goa8paxj.execute-api.us-east-1.amazonaws.com/headlines/quiz", { params: params })
    const headlines = response.data
    return headlines
  }

  const handleStartGame = async (options) => {
    setGameState("loading")
    setOptions(options)

    const sources = options.sources.join(",")
    const limit = options.limit
    const queryParams = { sources, limit }
    const headlines = await getHeadlines(queryParams)

    setHeadlines(headlines)
    setCurrentQuestionIndex(0)
    setGameState("playing")
  }

  const handleAnswerSubmit = (answer) => {
    if (answer === headlines[currentQuestionIndex].source) {
      alert("Correct")
      setNCorrect(nCorrect + 1)
    } else {
      alert("Incorrect")
    }
    if (currentQuestionIndex + 1 === headlines.length) {
      setGameState("results")
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
  }

  return (
    <>
      <h1>
        Headline Game
      </h1>
      {gameState === "loading" && <h3>Loading...</h3>}
      {gameState === "options" && <HeadlineOptions handleOptionsSubmit={handleStartGame}/>}
      {gameState === "playing" && <div><h3>Question {currentQuestionIndex + 1} out of {headlines.length}</h3></div>}
      {gameState === "playing" && <HeadlineQuestion headline={headlines[currentQuestionIndex]} potentialAnswers={options.sources} onSubmit={handleAnswerSubmit} />}
      {gameState === "results" && <ResultPage nAsked={headlines.length} nCorrect={nCorrect} />}
    </>
  )
}

export default HeadlineGame