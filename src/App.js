import React, { useState } from 'react';
import HeadlineGame from './HeadlineGame'
import AboutPage from './AboutPage';
import { Container, Button } from 'react-bootstrap'
function App() {
  const [route, setRoute] = useState("headlines")

  if (!route) {
    return (
      <Container>
        <Button variant="secondary" onClick={() => setRoute("headlines")}>Headline Game</Button>
        <p>Click a button above to start a free game</p>
        <Button variant="info" onClick={() => setRoute("about")}>View Source Code</Button>
      </Container>
    )
  }
  if (route === "headlines") {
    return (
      <>
      <Container>
        <HeadlineGame />
      </Container>
      <br />
      <Container>
        <Button variant="info" onClick={() => setRoute("about")}>View Source Code</Button>
      </Container>
      </>
    )
  }
  if (route === "about") {
    return (
      <Container>
        <Button variant="secondary" onClick={() => setRoute("headlines")}>Play Game</Button>
        <AboutPage />
      </Container>
    )
  }
}

export default App;
