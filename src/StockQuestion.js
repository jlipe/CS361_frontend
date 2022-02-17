import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'


const StockQuestion = ({question, options, onSubmit}) => {
  const [currentSelection, setCurrentSelection] = useState(null)

  const renderedOptions =  options.map((option, index) => {
    const info = option.quote
    return(
      <Form.Check key={info.symbol} type="radio" value={index} label={info.companyName} onChange={() => setCurrentSelection(index)} checked={currentSelection === index} />
    )
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(currentSelection)
    setCurrentSelection(null)
  }

  return (
    <div>
      <h1>{question}</h1>
      <Form onSubmit={handleSubmit}>
        {renderedOptions}
        <Button variant="primary" type="submit">Check Answer</Button>
      </Form>
    </div>

  )
}

export default StockQuestion