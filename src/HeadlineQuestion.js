import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap'

const HeadlineQuestion = ({headline, potentialAnswers, onSubmit}) => {
  const [currentSelection, setCurrentSelection] = useState(null)

  const renderedOptions = potentialAnswers.map(option => {
    return(
      <Form.Check key={option} type="radio" value={option} label={option} onChange={() => setCurrentSelection(option)} checked={currentSelection === option} />
    )
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!currentSelection) {
      alert("You need to select an option")
      return
    }
    setCurrentSelection(null)
    onSubmit(currentSelection)
  }

  const date = new Date(headline.time)

  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ]


  return (
    <div>
      <h2>Where was this headline posted on {monthNames[date.getMonth()]} {date.getDate()} {date.getFullYear()}?</h2>
      <h2>
        <i>
          {headline.headline}
        </i>
      </h2>
      <Form onSubmit={handleSubmit}>
        {renderedOptions}
        <br />
        <Button variant="primary" type="submit">
          Check Answer
        </Button>
      </Form>
    </div>
  )
}

export default HeadlineQuestion