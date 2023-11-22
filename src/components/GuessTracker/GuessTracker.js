import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

function GuessTracker({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((i) => {
        const g = guesses[i] ? guesses[i] : {}
        const {id = undefined, value} = g; 
        const key = value ? id : i;
        return <React.Fragment key={key}>
          <Guess value={value} answer={answer} key={key}/>
        </React.Fragment>;
      })}
    </div>
  );
}

function Guess({ value, answer }) {
  const baseClass = "cell";

  return (
    <p className="guess">
      {typeof value === "string"
        ? checkGuess(value, answer).map(({ letter, status }, i) => (
            <span className={`${baseClass} ${status}`} key={i}>{letter}</span>
          ))
        : range(5).map((i) => <span className={baseClass} key={i} />)}
    </p>
  );
}

export default GuessTracker;
