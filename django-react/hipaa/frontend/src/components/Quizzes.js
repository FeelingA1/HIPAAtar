import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getQuizzes } from '../actions/quizzes';
import { Component } from 'react';
export class Quizzes extends Component{
   static propTypes = {
     quizzes: PropTypes.array
   };
   componentDidMount(){
     this.props.getQuizzes();
   }
    render(){return (
      <div>
        <h3>Quizzes Page</h3>
        {this.props.quizzes.map(quiz => (
          <div>
            <a>{quiz.id}</a>
            <a>{quiz.title}</a>
          </div>
        ))}
      </div>
    );
    }
  }
const mapStateToProps = store => ({
  quizzes: store.quizzes.quizzes,
});

export default connect(mapStateToProps, {getQuizzes})(Quizzes);
