import React, {Component} from "react"
import quiz1 from './QuestionBanks/QuestionBank1'
import quiz2 from './QuestionBanks/QuestionBank2'
import quiz3 from './QuestionBanks/QuestionBank3'
import SelectionBar from './SelectionBar'
import QuestionBox from "./QuestionBox"
import Result from "./ResultBox"

class Quiz extends Component {
    numQuestions = 5;
    quizNumber = 0;
    bank1 = null;
    bank2 = null;
    bank3 = null;
    constructor() {
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
        if(this.quizNumber === 0) {
            console.log("No quiz number");
        }
        if(this.quizNumber === 1) {
            console.log("Quiz 1");
            if(this.bank1 === null) {
                quiz1().then((question) => {
                    console.log("Cache quiz1");
                    this.bank1 = [...question];
                    this.resetQuestions(this.bank1);
                });
            } else {
                console.log("Retrieve quiz1 from cache");
                this.resetQuestions(this.bank1)
            }
        } else if (this.quizNumber === 2) {
            console.log("Quiz 2");
            if(this.bank2 === null) {
                quiz2().then((question) => {
                    console.log("Cache quiz2");
                    this.bank2 = [...question];
                    this.resetQuestions(this.bank2);
                });
            } else {
                console.log("Retrieve quiz2 from cache");
                this.resetQuestions(this.bank2)
            }
        } else if (this.quizNumber === 3) {
            console.log("Quiz 3");
            if(this.bank3 === null) {
                quiz3().then((question) => {
                    console.log("Cache quiz3");
                    this.bank3 = [...question];
                    this.resetQuestions(this.bank3);
                });
            } else {
                console.log("Retrieve quiz3 from cache");
                this.resetQuestions(this.bank3);
            }
        }
    };

    resetQuestions = (bank) => {
        console.log("Set questionBank, score and numAnswered");
        let clonedBank = JSON.parse(JSON.stringify(bank)); // Need to clone to ensure this is copied by value instead of reference
        this.setState({questionBank: clonedBank, score: 0, numAnswered: 0, answered: [false, false, false, false, false]}); 
    }

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

    setQuiz1 = () => {
        console.log("Entered setQuiz1");
        this.quizNumber = 1;
        this.getQuestions();
    }

    setQuiz2 = () => {
        console.log("Entered setQuiz2");
        this.quizNumber = 2;
        this.getQuestions();
    }

    setQuiz3 = () => {
        console.log("Entered setQuiz3");
        this.quizNumber = 3;
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
                    score: updatedScore,
                    questionBank: this.selectedAnswers(i, response)
                });
                break;
            }
        }
    }

    selectedAnswers = (index, response) => {
        let selectedAnswers = [...this.state.questionBank]
        selectedAnswers[index].answers = [response];
        return selectedAnswers;
    }

    componentDidMount() {
        console.log("Entered componentDidMount");
        this.getQuestions();
    }

    render() {
        console.log("Entered Quiz.render()");
        return (<div className="container">
            <div className="title">
               <h2> Quiz {this.quizNumber} </h2>
            </div>
            <SelectionBar setQuiz1={this.setQuiz1}
                setQuiz2={this.setQuiz2}
                setQuiz3={this.setQuiz3}/>
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