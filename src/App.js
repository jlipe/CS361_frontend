import React, { useState } from 'react';
import StockGame from './StockGame'
import HeadlineGame from './HeadlineGame'
import AboutPage from './AboutPage';
import { Container, Button } from 'react-bootstrap'
function App() {
  const [route, setRoute] = useState(null)

  const goHome = () => {
    if (window.confirm("Are you sure you want to go home? This will reset your game")) {
      setRoute(null)
    }
  }

  if (!route) {
    return (
      <Container>
        <Button variant="secondary" onClick={() => setRoute("stocks")}>Stock Game</Button>
        <Button variant="secondary" onClick={() => setRoute("headlines")}>Headline Game</Button>
        <p>Click a button above to start a free game</p>
        <Button variant="info" onClick={() => setRoute("about")}>About</Button>
      </Container>
    )
  }
  if (route === "stocks") {
    return (
      <Container>
        <Button variant="danger" onClick={() => goHome()}>Home</Button>
        <StockGame />
      </Container>
    )
  }
  if (route === "headlines") {
    return (
      <Container>
        <Button variant="danger" onClick={() => goHome()}>Home</Button>
        <HeadlineGame />
      </Container>
    )
  }
  if (route === "about") {
    return (
      <Container>
        <Button variant="secondary" onClick={() => setRoute(null)}>Home</Button>
        <AboutPage />
      </Container>
    )
  }
}

export default App;
