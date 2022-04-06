import React, {useState} from 'react';
import Quiz from '../components/Quiz/Quiz'


const Quizzes = () =>{
  /* const[quizNum, setQuizNum] = new useState(0)
  const[quizName, setQuizName] = new useState('')
  console.log('beginning ' + quizNum)

  const handleQuizSelector = (num, name) => {
    setQuizNum(num)
    setQuizName(name)
  }
  return (
    <div>

      <button onClick={() => handleQuizSelector(1, "Quiz 1")} >quiz 1</button>
      <button onClick={() => handleQuizSelector(2, "Quiz 2")}>quiz 2</button>
      <button onClick={() => handleQuizSelector(3, "Quiz 3")} >quiz 3</button>

      {console.log('before quiz call ' + quizNum)}
      <Quiz quizName= {quizName} quizNumber = {quizNum}/>
      {console.log("after quiz call " + quizNum)}
    </div>
  ); */
  return (
    <div>
      <h3>Quizzes Page</h3>
      <Quiz/>
    </div>
  );
}
export default Quizzes;
