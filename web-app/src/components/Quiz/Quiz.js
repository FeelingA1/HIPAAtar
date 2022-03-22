import React, {Component} from "react"
import quiz1 from './QuestionBanks/QuestionBank1'
import quiz2 from './QuestionBanks/QuestionBank2'
import quiz3 from './QuestionBanks/QuestionBank3'
import QuestionBox from "./QuestionBox"
import Result from "./ResultBox"

class Quiz extends Component {
    // Make this editable based on Quiz
    numQuestions = 5;
        constructor(props) {
        super(props);
        this.state = {
            questionBank: [],
            score: 0,
            answered: 0
        };
    }

    // Need some way to specify quiz (probably string param corresponding to each quiz)
    getQuestions = () => {
        console.log("Entered getQuestions");
        if(this.props.quizNumber === 1) {
            quiz1().then(question => {
                this.setState({questionBank: question});
            });
        } else if (this.props.quizNumber === 2) {
            quiz2().then(question => {
                this.setState({questionBank: question});
            });
        } else if (this.props.quizNumber === 3) {
            quiz3().then(question => {
                this.setState({questionBank: question});
            });
        }
    };

    // Same issue as above
    playAgain = () => {
        this.getQuestions();
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
        this.getQuestions();
    }

    componentDidUpdate(prevProps) {
        if(prevProps.quizNumber !== this.props.quizNumber) {
            this.getQuestions();
        }
    }

    render() {
        return (<div className="container">
            <div className="title">
               <h2> {this.props.quizName} </h2>
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