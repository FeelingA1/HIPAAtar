import React from 'react'

const Result = ({score, playAgain, nextQuiz}) => (
    <div className="score-board">
        <div className="score"> Your score is {score} / 5 correct answers !!! </div>
        <button className="playBtn" onClick={playAgain}> Play Again </button>
        <button className="nextBtn" onClick={nextQuiz}> Next Quiz </button>
    </div>
);

export default Result;