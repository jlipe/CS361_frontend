import React, { useState } from 'react';
import StockGame from './StockGame'
import HeadlineGame from './HeadlineGame'



const stockList = [
  {price: "$194.42", date: "02/02/2022", company: "Microsoft"},
  {price: "$52.31", date: "01/05/2022", company: "Netflix"},
  {price: "$42.12", date: "02/01/2022", company: "Google"},
  {price: "$2354.12", date: "01/03/2022", company: "Amazon"},
];

function App() {
  const [route, setRoute] = useState(null)

  if (!route) {
    return (
      <div>
        <button onClick={() => setRoute("stocks")}>Stock Game</button>
        <button onClick={() => setRoute("headlines")}>Headline Game</button>
      </div>
    )
  }
  if (route === "stocks") {
    return (
      <div>
        <button onClick={() => setRoute(null)}>Home</button>
        <StockGame stocks={stockList} potentialAnswers={["Microsoft", "Netflix", "Google", "Amazon"]} />
      </div>
    )
  }
  if (route === "headlines") {
    return (
      <div>
        <button onClick={() => setRoute(null)}>Home</button>
        <HeadlineGame />
      </div>
    )
  }
}

export default App;
