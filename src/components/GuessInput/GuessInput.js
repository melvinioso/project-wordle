import React, { useState } from "react"

function GuessInput() {
  const [guess, setGuess] = useState("")

  function handleSubmit(event) {
    event.preventDefault()
    console.log({ guess })
    setGuess("")
  }

  return (
    <div>
      <form className="guess-input-wrapper" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value.toUpperCase())}
          pattern="[A-Za-z]{5}"
          title="5 letters only...no more, no less"
        />
      </form>
    </div>
  )
}

export default GuessInput
