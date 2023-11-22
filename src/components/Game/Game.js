import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessTracker from "../GuessTracker/GuessTracker";
import Banner from "../Banner/Banner";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

export const GameStates = {
  playing: "play",
  lost: "lose",
  won: "won",
};

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameState, setGameState] = React.useState(GameStates.playing);

  function addGuess(value) {
    const newGuesses = [...guesses, { value, id: crypto.randomUUID() }];
    setGuesses(newGuesses);
    if (value === answer) {
      setGameState(GameStates.won);
      return;
    }

    if (newGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameState(GameStates.lost);
      return;
    }
  }
  
  return (
    <>
      {gameState !== GameStates.playing && (
        <Banner
          hasWon={gameState === GameStates.won}
          guessCount={guesses.length}
          answer={answer}
        />
      )}
      <GuessTracker guesses={guesses} answer={answer} />
      <GuessInput onGuess={addGuess} disabled={gameState !== GameStates.playing} />
    </>
  );
}

export default Game;
