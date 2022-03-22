import React, {Component} from "react"
import quiz1 from './QuestionBanks/QuestionBank1'
import quiz2 from './QuestionBanks/QuestionBank2'
import quiz3 from './QuestionBanks/QuestionBank3'
import QuestionBox from "./QuestionBox"
import Result from "./ResultBox"

class Quiz extends Component {
    numQuestions = 5;
    quizNumber = 1;
    
    constructor() {
        console.log("Entered constructor");
        super();
        this.state = {
            questionBank: [],
            score: 0,
            numAnswered: 0,
            answered: [false, false, false, false, false]
        };
    }

    getQuestions = () => {
        console.log("Entered getQuestions");
        if(this.quizNumber === 1) {
            quiz1().then(question => {
                console.log("Set questionBank (quiz1), score and numAnswered");
                this.setState({questionBank: question, score: 0, numAnswered: 0, answered: [false, false, false, false, false]});
            });
        } else if (this.quizNumber === 2) {
            quiz2().then(question => {
                console.log("Set questionBank (quiz2), score and numAnswered");
                this.setState({questionBank: question, score: 0, numAnswered: 0, answered: [false, false, false, false, false]});
            });
        } else if (this.quizNumber === 3) {
            quiz3().then(question => {
                console.log("Set questionBank (quiz3), score and numAnswered");
                this.setState({questionBank: question, score: 0, numAnswered: 0, answered: [false, false, false, false, false]});
            });
        }
        
    };

    playAgain = () => {
        console.log("Entered playAgain");
        this.getQuestions();
    }

    nextQuiz = () => {
        console.log("Entered nextQuiz");
        this.quizNumber = this.quizNumber + 1;
        if(this.quizNumber === 4) {
            this.quizNumber = 1;
        }
        this.getQuestions();
    }

    computeAnswer = (response, correct) => {
        console.log("Entered computeAnswer");
        // Increment score on correct response that hasn't already been filled
        // Change answered when clicking on new question
        for(let i = 0; i < this.numQuestions; i++) {
            if(this.state.answered[i] === false && correct === this.state.questionBank[i].correct) {
                let updatedScore = this.state.score;
                if(response === correct) {
                    console.log("Correct response, score + 1");
                    updatedScore = updatedScore + 1;
                }
                let nowAnswered = [...this.state.answered];
                nowAnswered[i] = true;
                console.log("Update numAnswered (computeAnswer)");
                this.setState({answered: nowAnswered, 
                    numAnswered: this.state.numAnswered < this.numQuestions ? this.state.numAnswered + 1
                    : this.numQuestions,
                    score: updatedScore
                });
                break;
            }
        }
    }

    componentDidMount() {
        console.log("Entered componentDidMount");
        this.getQuestions();
    }

    render() {
        console.log("Entered Quiz.render()");
        return (<div className="container">
            <div className="title">
                QuizName    
            </div>

            {this.state.questionBank.length > 0 &&
            this.state.numAnswered < 5 &&
            this.state.questionBank.map(({question, answers, correct, questionId}) => 
            <QuestionBox question= {question} 
                options={answers} 
                key={questionId}
                selected={answer => this.computeAnswer(answer, correct)}/>)}
            {
                this.state.numAnswered === 5
                ? (<Result score={this.state.score}
                    playAgain={this.playAgain}
                    nextQuiz={this.nextQuiz}/>)
                : null
            }        
        </div>)
    }
}

export default Quiz;