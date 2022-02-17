import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap'

const HeadlineOptions = ({handleOptionsSubmit}) => {
  const [selectedOptions, setSelectedOptions] = useState([])
  const [articleLimit, setArticleLimit] = useState(3)
  const [showAdditionalOptions, setShowAdditionalOptions] = useState(false)

  const handleOnChange = (event) => {
    const value = event.target.value
    const index = selectedOptions.indexOf(value)
    if (index === -1) {
      // Option is not in the array
      setSelectedOptions([...selectedOptions, value])
    } else {
      setSelectedOptions(selectedOptions.filter(v => v !== value))
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (selectedOptions.length < 2) {
      alert("You need to select 2 or more news sources")
      return
    }
    if (articleLimit < 1 || articleLimit > 10) {
      alert("Article limit must be between 1 and 10")
      return
    }
    const options = {"sources": selectedOptions, "limit": articleLimit }
    handleOptionsSubmit(options)
    setArticleLimit(3)
    setSelectedOptions([])
  }

  const additionalOptions = (
    <>
      <h2>
          How many articles per site in the game (choose between 1 and 10):
      </h2>
      <Form.Control
        className="w-25"
        type="number"
        id="articleLimit"
        value={articleLimit}
        onChange={(e) => setArticleLimit(e.target.value)}
      />
      <br />
    </>
  )

  return (
    <>
      <h2>
          Select which headlines to have in the game (choose 2 or more):
      </h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            label="CNN"
            value="CNN"
            checked={selectedOptions.includes("CNN")}
            onChange={handleOnChange}
          />
          <Form.Check
            type="checkbox"
            label="Fox News"
            value="Fox News"
            checked={selectedOptions.includes("Fox News")}
            onChange={handleOnChange}
          />
          <Form.Check
            type="checkbox"
            label="Mother Jones"
            value="Mother Jones"
            checked={selectedOptions.includes("Mother Jones")}
            onChange={handleOnChange}
          />
          <Form.Check
            type="checkbox"
            label="Breitbart"
            value="Breitbart"
            checked={selectedOptions.includes("Breitbart")}
            onChange={handleOnChange}
          />
          <Form.Check
            type="checkbox"
            label="NY Times"
            value="NY Times"
            checked={selectedOptions.includes("NY Times")}
            onChange={handleOnChange}
          />
        </Form.Group>
        <Form.Group>
          <Button className="mb-3" variant="secondary" type="button" onClick={() => setShowAdditionalOptions(!showAdditionalOptions)}>
            {showAdditionalOptions ? "Hide additional options" : "Show additional options"}
          </Button>
        </Form.Group>
        {showAdditionalOptions && additionalOptions}
        <Form.Group>
          <Button variant="primary" type="submit">Start Game</Button>
        </Form.Group>
      </Form>
    </>
  )
}

export default HeadlineOptions
