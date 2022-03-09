import React, {Component} from "react"
import questionBank from './QuestionBank'
import QuestionBox from "./QuestionBox"
import Result from "./ResultBox"

class Quiz extends Component {
    // Make this editable based on Quiz
    numQuestions = 5;
    
    constructor() {
        super();
        this.state = {
            questionBank: [],
            score: 0,
            answered: 0
        };
    }

    // Need some way to specify quiz (probably string param corresponding to each quiz)
    getQuestions = () => {
        questionBank().then(question => {
            this.setState({questionBank: question});
        });
    };

    // Same issue as above
    playAgain = () => {
        this.getQuestions();
        this.setState({score: 0, responses: 0});
    }

    computeAnswer = (response, correct) => {
        if(response === correct) {
            this.setState({
                score: this.state.score + 1
            });
        }
        this.setState({
            answered: this.state.answered < this.numQuestions ? this.state.answered + 1
            : this.numQuestions
        })
    }

    componentDidMount() {
        this.getQuestions();
    }

    render() {
        return (<div className="container">
            <div className="title">
                QuizName    
            </div>

            {this.state.questionBank.length > 0 &&
            this.state.answered < 5 &&
            this.state.questionBank.map(({question, answers, correct, questionId}) => 
            <QuestionBox question= {question} 
                options={answers} 
                key={questionId}
                selected={answer => this.computeAnswer(answer, correct)}/>)}
            {
                this.state.answered === 5
                ? (<Result score={this.state.score}
                    playAgain={this.playAgain}/>)
                : null
            }        
        </div>)
    }
}

export default Quiz;