import React, {useState} from 'react'
import ResultPage from './ResultPage'



const StockGame = () => {
    const [currentStockIndex, setCurrentStockIndex] = useState(0)
    const [currentSelection, setCurrentSelection] = useState(null)
    const [nCorrect, setNCorrect] = useState(0)

    const stocks = [
      {price: "$194.42", date: "02/02/2022", company: "Microsoft"},
      {price: "$52.31", date: "01/05/2022", company: "Netflix"},
      {price: "$42.12", date: "02/01/2022", company: "Google"},
      {price: "$2354.12", date: "01/03/2022", company: "Amazon"},
    ]

    const potentialAnswers = ["Microsoft", "Netflix", "Google", "Amazon"]

    if (currentStockIndex >= stocks.length) {
        return (
            <ResultPage nCorrect={nCorrect} nAsked={stocks.length} />
        )
    }


    let currentStock = stocks[currentStockIndex]

    const renderedOptions = potentialAnswers.map(answer => {
        return (
            <label key={answer}>
                <input type="radio" value={answer} name="answer" onChange={() => setCurrentSelection(answer)} checked={currentSelection === answer} />
                {answer}
            </label>
        )
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        if (currentSelection === currentStock.company) {
            alert("correct")
            setCurrentStockIndex(currentStockIndex + 1)
            setCurrentSelection(null)
            setNCorrect(nCorrect + 1)
        } else {
            alert("Not correct")
            setCurrentStockIndex(currentStockIndex + 1)
            setCurrentSelection(null)
        }
    }

    return (
        <div>
            <h1>Stock price of {currentStock.price} on {currentStock.date}</h1>
            <form onSubmit={handleSubmit}>
                {renderedOptions}
                <br />
                <input type="submit" value="Check Answer" />
            </form>
        </div>
    )
}

export default StockGame