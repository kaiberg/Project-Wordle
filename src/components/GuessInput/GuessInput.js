import React from "react";

const defaultValue = "";

const notFiveLettersError = "please make a guess with precisely 5 characters";

function GuessInput({ onGuess, disabled }) {
  const [guess, setGuess] = React.useState(defaultValue);

  function handleSubmit(e) {
    e.preventDefault();

    if (guess.length !== 5) {
      window.alert(notFiveLettersError);
      return;
    }

    const guessNormalized = guess.toUpperCase();

    onGuess(guessNormalized);

    console.log({
      guess: guessNormalized,
    });

    setGuess(defaultValue);
  }

  function handleChange(e) {
    setGuess(e.target.value.toUpperCase());
  }

  return (
    // use pattern instead
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">enter guess:</label>
      <input
        disabled={disabled}
        className="guess-input"
        type="text"
        id="guess-input"
        onChange={handleChange}
        value={guess}
        pattern="[a-zA-Z]{5}"
        maxLength={5}
        minLength={5}
        title={notFiveLettersError}
        required
      />
    </form>
  );
}

export default GuessInput;
