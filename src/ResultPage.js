import React from 'react'

const ResultPage = ({nCorrect, nAsked}) => {
    return (
        <div>
            <h1>Congrats, you scored {nCorrect} out of {nAsked}</h1>
            <h1>That is a {(nCorrect / nAsked) * 100} %</h1>
        </div>
    )
}

export default ResultPage