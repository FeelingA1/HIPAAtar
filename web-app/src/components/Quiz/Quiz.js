import React, {Component} from "react"
import getQuiz from './QuestionBank'
import QuestionBox from "./QuestionBox"
import Result from "./ResultBox"

class Quiz extends Component {
    // Make this editable based on Quiz
    numQuestions = 5;
    quizNumber = 1;
    
    constructor() {
        super();
        this.state = {
            questionBank: [],
            score: 0,
            answered: 0
        };
    }

    // Need some way to specify quiz (probably string param corresponding to each quiz)
    getQuestions = (n) => {
        console.log("Entered getQuestions");
        /* if(n === 1) {
            questionBank1().then(question => {
                this.setState({questionBank: question});
            });
        } else if (n === 2) {
            questionBank2().then(question => {
                this.setState({questionBank: question});
            });
        } else if (n === 3) {
            questionBank3().then(question => {
                this.setState({questionBank: question});
            });
        } */
        getQuiz(n).then(question => {
            this.setState({questionBank: question});
        });
    };

    // Same issue as above
    playAgain = () => {
        this.getQuestions(this.quizNumber);
        this.setState({score: 0, answered: 0});
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
        this.getQuestions(this.quizNumber);
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