import React from 'react';
import Quiz from '../components/Quiz/Quiz'

const Quizzes = () =>{
  const quizNum = 3; //change this value in parent to change quiz bank
  return (
    <div>
      <h3>Quizzes Page</h3>
      <Quiz quizNumber = {quizNum}/>
    </div>
  );
}
export default Quizzes;
