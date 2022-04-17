import React, { useState } from 'react';
import './Goals.css';
const Goals = () => {
  const [showGoalForm, setShowGoalForm] = useState(false);
  const [goalType, setGoalType] = useState('Mental Health');


  const handleGoalTypeChange = (event) => {
    console.log('prev goalType ' + goalType)

    setGoalType(event.target.value)
    console.log('event.target.value ' + event.target.value)

    console.log('post goalType ' + goalType)
  }

  return (
    <div className="goals-page-container">
      <div className="goals-container">
        <div className="community-goals">
          Community Goals
        </div>
      </div>
      <div className="goals-container">
        <div className="personal-goals">
          Personal Goals
        </div>
      </div>
      <div className="add-goal-btn">
        <button onClick={() => setShowGoalForm(!showGoalForm)}>Add Goal</button>
      </div>
      {showGoalForm && (

        <div className="add-goal-form">
          <form>
            <label className="form-label">
              Goal Title
              <input type="text" name="title" />
            </label>
            <label className="form-label">Goal Type
              <select value={goalType} onChange={handleGoalTypeChange}>
                <option value="Cardio">Cardio</option>
                <option value="Mental Health" selected>Mental Health</option>
                <option value="Sleep">Sleep</option>
                <option value="Diet">Diet</option>
              </select>
            </label>


            <input type="submit" value="Submit" />
          </form>
        </div>
      )}


    </div>
  );
}
export default Goals;
