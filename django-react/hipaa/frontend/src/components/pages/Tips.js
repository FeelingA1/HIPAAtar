import React from 'react';
import { Link } from 'react-router-dom';
import { Router, Route, hashHistory } from 'react-router';
import ArrowSlide from "../components/Expansion"
import style from "../components/Expansion.css"

const Tips = () =>{
  return (
    <div>
      <h3>Tips </h3>
      <ArrowSlide itemsName="Managing mental stress"  itemLable={false} >
          <div className="panel-context">Try breathing slowly in to the count of 4. Breathe slowly out to the count of 8. This will help to relax your heart and reduce tension.
            <div><Link to="/mentalTip"> More Tips</Link></div>
          </div>
        </ArrowSlide>
        <ArrowSlide itemsName="Talking to your provider"  itemLable={false} >
          <div className="panel-context">Prepare a list of 1-3 of your most important  questions that you want to ask. This will help your provider to know what is important to you.
            <div><Link to="/communicationTip" > More Tips</Link></div>
          </div>
        </ArrowSlide>
        <ArrowSlide itemsName="Healthy eating on a budget"  itemLable={false} >
          <div className="panel-context">Buy fruit that is on sale. Freeze it to for a healthy snack.
            <div><Link to="/dietTip"> More Tips</Link></div>
          </div>
        </ArrowSlide>
        <ArrowSlide itemsName="Sleep Tips"  itemLable={false} >
          <div className="panel-context">Avoid drinking alcohol as it will shorten your sleep.
            <div><Link to="/sleepTip"> More Tips</Link></div>
          </div>
        </ArrowSlide>
        <ArrowSlide itemsName="Use Tips"  itemLable={false} >
          <div className="panel-context">MytipsContent： This is a dummy tips content, waiting for sponser decision on tip content
            <div><Link to="/useTip"> More Tips</Link></div>
          </div>
        </ArrowSlide>
    </div>

  );
}
export default Tips;
