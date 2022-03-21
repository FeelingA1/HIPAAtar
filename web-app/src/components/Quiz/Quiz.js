import React, {Component} from "react"
import quiz1 from './QuestionBanks/QuestionBank1'
import quiz2 from './QuestionBanks/QuestionBank2'
import quiz3 from './QuestionBanks/QuestionBank3'
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
            numAnswered: 0
        };
    }

    // Need some way to specify quiz (probably string param corresponding to each quiz)
    getQuestions = () => {
        console.log("Entered getQuestions");
        if(this.quizNumber === 1) {
            quiz1().then(question => {
                this.setState({questionBank: question});
            });
        } else if (this.quizNumber === 2) {
            quiz2().then(question => {
                this.setState({questionBank: question});
            });
        } else if (this.quizNumber === 3) {
            quiz3().then(question => {
                this.setState({questionBank: question});
            });
        }
    };

    // Same issue as above
    playAgain = () => {
        this.getQuestions();
        this.setState({score: 0, numAnswered: 0});
    }

    computeAnswer = (response, correct) => {
        console.log("Entered computeAnswer");
        if(response === correct) {
            console.log("Correct response");
            this.setState({
                score: this.state.score + 1
            });
        }
        console.log("Setting state again");
        /* for(let x = 0; x < 5; x++) {
            if(correct === this.state.questionBank[x].correct) {
                this.answerSelected(x, response);
            }
        } */
        this.setState({
            numAnswered: this.state.numAnswered < this.numQuestions ? this.state.numAnswered + 1
            : this.numQuestions
        })
    }

    /* answerSelected(question, selected) {
        var updatedBank = new Array(this.state.questionBank);
        updatedBank[question].answers = selected;
        this.setState({
            questionBank: updatedBank
        })
    } */

    componentDidMount() {
        this.getQuestions();
    }

    render() {
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
                    playAgain={this.playAgain}/>)
                : null
            }        
        </div>)
    }
}

export default Quiz;