import React, { useState } from "react"

import { sample } from "../../utils"
import { WORDS } from "../../data"

import GuessInput from "../GuessInput"
import GuessResults from "../GuessResults"
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [guessResults, setGuessResults] = useState([])
  const [gameOver, setGameOver] = useState(false)

  function gameOverBanner() {
    if (guessResults.length <= NUM_OF_GUESSES_ALLOWED && guessResults.includes(answer)) {
      setGameOver(true)
      return (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> You got it in
            <strong>
              {" "}
              {guessResults.length} {guessResults.length > 1 ? "guesses" : "guess"}
            </strong>
          </p>
        </div>
      )
    }

    if (guessResults.length === NUM_OF_GUESSES_ALLOWED && !guessResults.includes(answer)) {
      setGameOver(true)
      return (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )
    }
  }

  return (
    <>
      <GuessResults guessResults={guessResults} answer={answer} />
      <GuessInput
        guessResults={guessResults}
        setGuessResults={setGuessResults}
        disabled={gameOver}
      />
      {gameOverBanner()}
    </>
  )
}

export default Game
