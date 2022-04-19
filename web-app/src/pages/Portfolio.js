import React from 'react';
import './Portfolio.css';
import ChatBox from '../components/ChatBox.js';
import { Link } from 'react-router-dom';
const Portfolio = () =>{
  return (
    <div className="portfolio-container">
      <div className="avatar-field">
        <div className= "avatar-box">
          Avatar {/*place avatar component here*/}
        </div>
          {/*<Link to="/AvatarGen">*/}
          <a href="http://localhost:8080/" target="_blank">
             <button className="edit-avatar-btn" >Edit My Avatar</button>
              </a>
          {/*</Link>*/}
      </div>

      <div className="information-field">  
        <h3>My Portfolio</h3>
        <form>
          <label>

          Username
          <input type="text" name ="username" value="johnsmith2210" readOnly/>
  
          </label>
            <label >
            Legal Name
            
            <input className = "block" type="text" name ="firstname" value="john"/>
            <input className = "block" type="text" name ="middlename" value="J"/>
            <input className = "block" type="text" name ="lastname" value="smith"/>
          </label>

          
        </form>

        <div className="quiz-results">
          <label>
            Quiz Results
          </label>  
          <div className="quiz-results-box">
            {/*place quiz results here here*/}
          </div>
        </div>
      </div>

      <div className="message-box">
      <label className='formTitle'>New Message</label>
          <ChatBox/>
      </div>

    </div>
  );
}
export default Portfolio;
