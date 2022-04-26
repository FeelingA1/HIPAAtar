import React, {useState} from "react";

var QuestionBox = ({question, options, selected}) => {
    var [answer, setAnswer] = useState(options);
    // console.log("Current question is... " + question);
    // console.log("The answers are: " + options);
    return (
        <div className="questionBox">
            <div className="question">{question}</div>
            {options.map((text, index) => (
                <button
                    key={index}
                    className="answerBtn"
                    onClick={()=> {
                        selected(text);
                        setAnswer([text]);
                    }}> {text}
                </button>
            ))}
        </div>
    )
};

export default QuestionBox;