import React, { useState } from "react"

function GuessInput({ handleSubmitGuess, gameStatus }) {
  const [tentativeGuess, setTentativeGuess] = useState("")

  function handleSubmit(event) {
    event.preventDefault()
    handleSubmitGuess(tentativeGuess)
    setTentativeGuess("")
  }

  return (
    <div>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          required
          disabled={gameStatus !== "running"}
          id="guess-input"
          type="text"
          value={tentativeGuess}
          onChange={(e) => setTentativeGuess(e.target.value.toUpperCase())}
          pattern="[A-Za-z]{5}"
          title="5 letter words only"
        />
      </form>
    </div>
  )
}

export default GuessInput
