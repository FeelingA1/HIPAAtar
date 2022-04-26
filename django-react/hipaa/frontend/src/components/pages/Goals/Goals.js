import React, { useState } from "react";
import "./Goals.css";
import Goal from "./Goal";

const Goals = () => {
  const [showGoalForm, setShowGoalForm] = useState(false);
  const [comGoals, setComGoals] = useState([
    {
      title: "Com goal 1",
      type: "test",
      isPublic: true,
    },
    {
      title: "Com goal 2",
      type: "test2",
      isPublic: true,
    },
  ]);

  const [perGoals, setPerGoals] = useState([
    {
      title: "Per goal 1",
      type: "test",
      isPublic: true,
    },
    {
      title: "Per goal 2",
      type: "test2",
      isPublic: true,
    },
  ]);


  console.log(comGoals);
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    isPublic: true,
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function renderGoals(goals) {
    return goals.map((item) => (
      <li className="list-item">
        <Goal goalTitle={item.title} />
      </li>
    ));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    if (formData.isPublic) {
      setComGoals((prevComGoals) => [...prevComGoals, formData]);
    } else {
      setPerGoals((prevPerGoals) => [...prevPerGoals, formData]);
    }
  };

  return (
    <div className="goals-page-container">
      <div className="goals-container">
        <div className="community-goals">Community Goals</div>
        <ul className="goal-list">{renderGoals(comGoals)}</ul>
      </div>
      <div className="goals-container">
        <div className="personal-goals">Personal Goals</div>
         <ul className="goal-list">{renderGoals(perGoals)}</ul>
      </div>
      <div className="add-goal-btn">
        <button onClick={() => setShowGoalForm(!showGoalForm)}>Add Goal</button>
      </div>
      {showGoalForm && (
        <div className="add-goal-form">
          <form>
            <label className="form-label">
              Goal Title
              <input type="text" name="title" onChange={handleChange} />
            </label>
            <fieldset>
              <legend>Select your Goal Type</legend>
              <input
                type="radio"
                id="cardio"
                name="type"
                value="cardio"
                checked={formData.type === "cardio"}
                onChange={handleChange}
              />
              <label htmlFor="cardio">Cardio</label>
              <br />

              <input
                type="radio"
                id="mental health"
                name="type"
                value="mental health"
                checked={formData.type === "mental health"}
                onChange={handleChange}
              />
              <label htmlFor="mental health">Mental Health</label>
              <br />

              <input
                type="radio"
                id="sleep"
                name="type"
                value="sleep"
                checked={formData.type === "sleep"}
                onChange={handleChange}
              />
              <label htmlFor="sleep">Sleep</label>
              <br />
              <input
                type="radio"
                id="diet"
                name="type"
                value="diet"
                checked={formData.type === "diet"}
                onChange={handleChange}
              />
              <label htmlFor="diet">Diet</label>
              <br />
            </fieldset>
            <br />
            <label htmlFor="isPublic">Share goal to community?</label>
            <input
              type="checkbox"
              id="diet"
              checked={formData.isPublic}
              onChange={handleChange}
              name="isPublic"
            />
            <br />
            <button type="submit" onClick={handleSubmit}>
              Create Goal
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
export default Goals;
