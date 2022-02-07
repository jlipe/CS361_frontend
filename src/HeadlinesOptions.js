import React, {useState} from 'react'

const HeadlineOptions = ({handleOptionsSubmit}) => {

  const [selectedOptions, setSelectedOptions] = useState([])

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
      alert("You need to select 2 or more options")
      return
    }
    setSelectedOptions([])
    handleOptionsSubmit(selectedOptions)
  }

  return (
    <div>
      <h2>
        Select which headlines to have in the game
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="checkbox"
          value="CNN"
          id="CNN"
          checked={selectedOptions.includes("CNN")}
          onChange={handleOnChange}
        />
        <label htmlFor="CNN">CNN</label>
        <input
          type="checkbox"
          value="Fox News"
          id="FoxNews"
          checked={selectedOptions.includes("Fox News")}
          onChange={handleOnChange}
        />
        <label htmlFor="FoxNews">Fox News</label>
        <input
          type="checkbox"
          value="Mother Jones"
          id="MotherJones"
          checked={selectedOptions.includes("Mother Jones")}
          onChange={handleOnChange}
        />
        <label htmlFor="MotherJones">Mother Jones</label>
        <input
          type="checkbox"
          value="Breitbart"
          id="Breitbart"
          checked={selectedOptions.includes("Breitbart")}
          onChange={handleOnChange}
        />
        <label htmlFor="Breitbart">Breitbart</label>
        <input
          type="checkbox"
          value="NY Times"
          id="NYTimes"
          checked={selectedOptions.includes("NY Times")}
          onChange={handleOnChange}
        />
        <label htmlFor="NYTimes">NY Times</label>
        <br />
        <button type="submit">Start Game</button>
      </form>
    </div>
  )
}

export default HeadlineOptions
