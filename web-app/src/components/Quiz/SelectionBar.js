import React, {useState} from "react";

const SelectionBar = ({setQuiz1, setQuiz2, setQuiz3}) => {
    /* var [quizNum, setQuizNum] = useState(quizNumber)
    console.log('beginning ' + quizNum)

    const handleQuizSelector = (num) => {
        setQuizNum(num)
    } */
    return (
        <div className="QuizSelection">
            <button className="QuizSelectionButton" onClick={setQuiz1}>quiz 1</button>
            <button className="QuizSelectionButton" onClick={setQuiz2}>quiz 2</button>
            <button className="QuizSelectionButton" onClick={setQuiz3} >quiz 3</button>
        </div>
    );
}

export default SelectionBar;