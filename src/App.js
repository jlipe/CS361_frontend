import React, { useState } from 'react';
import StockGame from './StockGame'
import HeadlineGame from './HeadlineGame'
import AboutPage from './AboutPage';





function App() {
  const [route, setRoute] = useState(null)

  const goHome = () => {
    if (window.confirm("Are you sure you want to go home? This will reset your game")) {
      setRoute(null)
    }
  }

  if (!route) {
    return (
      <div>
        <button onClick={() => setRoute("stocks")}>Stock Game</button>
        <button onClick={() => setRoute("headlines")}>Headline Game</button>
        <p>Click a button above to start a free game</p>
        <button onClick={() => setRoute("about")}>About</button>
      </div>
    )
  }
  if (route === "stocks") {
    return (
      <div>
        <button onClick={() => goHome()}>Home</button>
        <StockGame />
      </div>
    )
  }
  if (route === "headlines") {
    return (
      <div>
        <button onClick={() => goHome()}>Home</button>
        <HeadlineGame />
      </div>
    )
  }
  if (route === "about") {
    return (
      <div>
        <button onClick={() => setRoute(null)}>Home</button>
        <AboutPage />
      </div>
    )
  }
}

export default App;
