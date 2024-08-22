import React from "react"

import { checkGuess } from "../../game-helpers"

function Guess({ guess, answer }) {
  if (guess) {
    const results = checkGuess(guess, answer)
    return (
      <p className="guess">
        {results.map((result, index) => (
          <span key={index} className={`cell ${result.status}`}>
            {result.letter}
          </span>
        ))}
      </p>
    )
  }

  return (
    <p className="guess">
      <span className="cell">{""}</span>
      <span className="cell">{""}</span>
      <span className="cell">{""}</span>
      <span className="cell">{""}</span>
      <span className="cell">{""}</span>
    </p>
  )
}

export default Guess
