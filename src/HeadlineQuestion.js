import React, {useState} from 'react'

const HeadlineQuestion = ({headline, potentialAnswers, onSubmit}) => {
  const [currentSelection, setCurrentSelection] = useState(null)
  const renderedOptions = potentialAnswers.map(option => {
    return(
      <label key={option}>
        <input type="radio" value={option} name="option" onChange={() => setCurrentSelection(option)} checked={currentSelection === option} />
        {option}
      </label>
    )
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    setCurrentSelection(null)
    onSubmit(currentSelection)
  }

  if (!headline) {
    return null
  }

  if (!potentialAnswers) {
    return null
  }

  return (
    <div>
      <h1>
        {headline.headline}
      </h1>
      <form onSubmit={handleSubmit}>
        {renderedOptions}
        <input type="submit" value="Check Answer" />
      </form>
    </div>
  )
}

export default HeadlineQuestion