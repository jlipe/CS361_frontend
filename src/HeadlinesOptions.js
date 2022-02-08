import React, {useState} from 'react'

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
    setArticleLimit(3)
    setSelectedOptions([])
    handleOptionsSubmit(selectedOptions, articleLimit)
  }

  const additionalOptions = (
    <>
      <h2>
          How many articles per site in the game (choose between 1 and 10):
      </h2>
      <input
      type="number"
      id="articleLimit"
      value={articleLimit}
      onChange={(e) => setArticleLimit(e.target.value)}
      />
      <br />
    </>
  )

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>
            Select which headlines to have in the game (choose 2 or more):
        </h2>
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
        <button type="button" onClick={() => setShowAdditionalOptions(!showAdditionalOptions)}>
          {showAdditionalOptions ? "Hide additional options" : "Show additional options"}
        </button>
        {showAdditionalOptions && additionalOptions}
        <br />
        <button type="submit">Start Game</button>
      </form>
    </div>
  )
}

export default HeadlineOptions
