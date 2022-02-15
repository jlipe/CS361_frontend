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
      <form onSubmit={handleSubmit}>
        {renderedOptions}
        <br />
        <input type="submit" value="Check Answer" />
      </form>
    </div>
  )
}

export default HeadlineQuestion