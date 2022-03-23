import React from 'react';
import { Link } from 'react-router-dom';
import { Router, Route, hashHistory } from 'react-router';
import ArrowSlide from "../components/Expansion"
import style from "../components/Expansion.css"

const Tips = () =>{
  return (
    <div>
      <h3>Tips </h3>
        <ArrowSlide itemsName="MedicalTip"  itemLable={false} >
          <div className="panel-context">MytipsContent： This is a dummy tips content, waiting for sponser decision on tip content
            <div><Link to="/medicalTip" > More Tips</Link></div>
          </div>
        </ArrowSlide>
        <ArrowSlide itemsName="MentalTip"  itemLable={false} >
          <div className="panel-context">MytipsContent： This is a dummy tips content, waiting for sponser decision on tip content
            <div><Link to="/mentalTip"> More Tips</Link></div>
          </div>
        </ArrowSlide>
        <ArrowSlide itemsName="SleepTip"  itemLable={false} >
          <div className="panel-context">MytipsContent： This is a dummy tips content, waiting for sponser decision on tip content
            <div><Link to="/sleepTip"> More Tips</Link></div>
          </div>
        </ArrowSlide>
        <ArrowSlide itemsName="UseTip"  itemLable={false} >
          <div className="panel-context">MytipsContent： This is a dummy tips content, waiting for sponser decision on tip content
            <div><Link to="/useTip"> More Tips</Link></div>
          </div>
        </ArrowSlide>
    </div>

  );
}
export default Tips;
