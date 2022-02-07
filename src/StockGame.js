import React, {useState} from 'react'
import ResultPage from './ResultPage'

const StockGame = ({stocks, potentialAnswers}) => {
    const [currentStockIndex, setCurrentStockIndex] = useState(0)
    const [currentSelection, setCurrentSelection] = useState(null)
    const [nCorrect, setNCorrect] = useState(0)

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