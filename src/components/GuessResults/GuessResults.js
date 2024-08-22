import React from "react"

import Guess from "../Guess"
import { range } from "../../utils"
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"

function GuessResults({ guessResults }) {
  const maxGuesses = range(0, NUM_OF_GUESSES_ALLOWED, 1)
  const guesses = maxGuesses.map((guessIndex) => guessResults[guessIndex] || "")

  return (
    <div className="guess-results">
      {guesses.map((guess, index) => (
        <Guess key={index} guess={guess} />
      ))}
    </div>
  )
}

export default GuessResults
