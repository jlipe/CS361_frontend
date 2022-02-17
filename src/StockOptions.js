import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap'

const StockOptions = ({onSubmit}) => {
  const [nQuestions, setNQuestions] = useState('3')
  const [nOptions, setNOptions] = useState('4')
  const [showAdditionalOptions, setShowAdditionalOptions] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (+nQuestions < 1 || +nQuestions > 10) {
      alert("You need to choose between 1 and 10 questions")
      return
    }
    if (+nOptions < 2 || +nOptions > 5) {
      alert("You need to choose between 2 and 5 game options")
      return
    }
    onSubmit(nQuestions, nOptions)
  }

  const additionalOptions = (
    <>
      <h2>
          How many options per question in the game (choose between 2 and 5):
      </h2>
      <Form.Control
        className="w-25 mb-3"
        type="number"
        value={nOptions}
        onChange={(e) => setNOptions(e.target.value)}
      />
    </>
  )

  return(
    <>
      <h2>
        Select how many questions in the game (between 1 and 10):
      </h2>
      <Form onSubmit={(event) => handleSubmit(event)}>
        <Form.Group>
          <Form.Control
            className="w-25"
            type="number"
            value={nQuestions}
            onChange={(e) => setNQuestions(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Button className="my-3" type="button" variant="secondary" onClick={() => (setShowAdditionalOptions(!showAdditionalOptions))}>
            {showAdditionalOptions ? "Hide additional options" : "Show additional options"}
          </Button>
        </Form.Group>
        {showAdditionalOptions && additionalOptions}
        <Form.Group>
          <Button type="submit" variant="primary">Start Game</Button>
        </Form.Group>
      </Form>
    </>
  )
}

export default StockOptions

