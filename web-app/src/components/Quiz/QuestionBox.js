import React, {useState} from "react";

var QuestionBox = ({question, options, selected}) => {
    var [answer, setAnswer] = useState(options);
    console.log("Current question is... " + question);
    return (
        <div className="questionBox">
            <div className="question">{question}</div>
            {answer.map((text, index) => (
                <button
                    key={index}
                    className="answerBtn"
                    onClick={()=> {
                        selected(text);
                        setAnswer(answer);
                    }}> {text}
                </button>
            ))}
        </div>
    )
};

export default QuestionBox;