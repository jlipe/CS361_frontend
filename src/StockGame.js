import React, {useState, useRef, useEffect} from 'react'
import StockOptions from './StockOptions'
import ResultPage from './ResultPage'
import StockQuestion from './StockQuestion'
import axios from 'axios'



const StockGame = () => {
  const [gameState, setGameState] = useState("options")
  const nQuestionsLeft = useRef()
  const nQuestions = useRef()
  const nOptions = useRef()
  const [stocks, setStocks] = useState({})
  const [currentQuestion, setCurrentQuestion] = useState(null)
  const nCorrect = useRef(0)

  const handleOptionsSubmit = (questions, options) => {
    nQuestionsLeft.current = questions
    nQuestions.current = questions
    nOptions.current = options
    if (Object.keys(stocks).length === 0) {
      setGameState("loading")
    }
    else {
      setGameState("playing")
    }
  }

  useEffect(() => {
    let isMounted = true
    axios.get("https://team-a-stock-viewer.herokuapp.com/service")
      .then(result => {
        if (isMounted) setStocks(result.data)
      })
    return () => { isMounted = false }
  }, [])

  useEffect(() => {
    if (gameState === "loading") {
      if (Object.keys(stocks).length !== 0) {
        setGameState("playing")
      }
    }
  }, [stocks, gameState])

  const generateRandomQuestion = () => {
    const chosen = new Set()
    const keys = Object.keys(stocks)
    const result = []
    while (chosen.size < nOptions.current) {
      // Replace with nOptions later
      const index = Math.floor(Math.random() * keys.length)
      if (chosen.has(index)) {
        continue
      } else {
        chosen.add(index)
        result.push(stocks[keys[index]])
      }
    }
    return result
  }

  if (gameState === "options") {
    return (
      <StockOptions onSubmit={handleOptionsSubmit} />
    )
  }

  const onQuestionSubmit = (selectedIndex) => {
    let maxMarketCapIndex = 0
    for (let i = 0; i < currentQuestion.length; i++) {
      if (+currentQuestion[i].quote.marketCap > +currentQuestion[maxMarketCapIndex].quote.marketCap) {
        maxMarketCapIndex = i
      }
    }
    if (maxMarketCapIndex === selectedIndex) {
      alert("Correct")
      nCorrect.current++
    } else {
      alert("Incorrect")
    }
    nQuestionsLeft.current--
    if (nQuestionsLeft.current === 0) {
      setGameState("results")
      return
    } else {
      const newQuestion = generateRandomQuestion()
      setCurrentQuestion(newQuestion)
    }
    }

  if (gameState === "playing") {
    if (!currentQuestion) {
      const question = generateRandomQuestion()
      setCurrentQuestion(question)
    }
    return (
      <>
        <div><h3>Question {nQuestions.current - nQuestionsLeft.current + 1} out of {nQuestions.current}</h3></div>
        <StockQuestion question="Which has the largest market cap?" options={currentQuestion} onSubmit={onQuestionSubmit} />
      </>
    )
  }

  if (gameState === "results") {
    return (
      <ResultPage nCorrect={nCorrect.current} nAsked={nQuestions.current} />
    )
  }

  if (gameState === "loading") {
    return (
      <h1>Loading...</h1>
    )
  }

  // if (currentStockIndex >= stocks.length) {
  //     return (
  //         <ResultPage nCorrect={nCorrect} nAsked={stocks.length} />
  //     )
  // }


  // let currentStock = stocks[currentStockIndex]

  // const renderedOptions = potentialAnswers.map(answer => {
  //     return (
  //         <label key={answer}>
  //             <input type="radio" value={answer} name="answer" onChange={() => setCurrentSelection(answer)} checked={currentSelection === answer} />
  //             {answer}
  //         </label>
  //     )
  // })

  // const handleSubmit = (event) => {
  //     event.preventDefault()
  //     if (currentSelection === currentStock.company) {
  //         alert("correct")
  //         setCurrentStockIndex(currentStockIndex + 1)
  //         setCurrentSelection(null)
  //         setNCorrect(nCorrect + 1)
  //     } else {
  //         alert("Not correct")
  //         setCurrentStockIndex(currentStockIndex + 1)
  //         setCurrentSelection(null)
  //     }
  // }

  // return (
  //     <div>
  //         <h1>Stock price of {currentStock.price} on {currentStock.date}</h1>
  //         <form onSubmit={handleSubmit}>
  //             {renderedOptions}
  //             <br />
  //             <input type="submit" value="Check Answer" />
  //         </form>
  //     </div>
  // )
}

export default StockGame