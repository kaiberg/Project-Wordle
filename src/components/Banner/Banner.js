import React from "react";

function Banner({ hasWon, guessCount, answer }) {
  const statusClass = hasWon ? "happy" : "sad";

  return (
    <div className={`${statusClass} banner`}>
      <BannerResult hasWon={hasWon} guessCount={guessCount} answer={answer} />
    </div>
  );
}

function BannerResult({ hasWon, guessCount, answer }) {
  let content;

  hasWon
    ? (content = (
        <>
          <strong>Congratulations!</strong> Got it in
          <strong> {guessCount} guess{guessCount > 1 && 'es'}</strong>.
        </>
      ))
    : (content = (
        <>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </>
      ));

  return <p>{content}</p>;
}

export default Banner;
