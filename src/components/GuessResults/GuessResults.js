import React from "react"

function GuessResults({ guessResults }) {
  return (
    <div className="guess-results">
      {guessResults.map((result, i) => (
        <p key={i} className="guess">
          {result}
        </p>
      ))}
    </div>
  )
}

export default GuessResults
