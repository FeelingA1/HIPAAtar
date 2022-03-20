import React from 'react';
import { Link } from 'react-router-dom';
import { Router, Route, hashHistory } from 'react-router';
import ArrowSlide from "../components/Expansion"

const Tips = () =>{
  return (
    <div>
      <h3>Tips </h3>
        <ArrowSlide itemsName="Mytips"  itemLable={false} >
          MytipsContent： This is a dummy tips content, waiting for sponser decision on tip content
          <Link to="/medicalTip" > More Tips</Link>
        </ArrowSlide>
        <ArrowSlide itemsName="Mytips2"  itemLable={false} >
          MytipsContent： This is a dummy tips content, waiting for sponser decision on tip content
          <Link to="/mentalTip"> More Tips</Link>
        </ArrowSlide>
        <ArrowSlide itemsName="Mytips3"  itemLable={false} >
          MytipsContent： This is a dummy tips content, waiting for sponser decision on tip content
          <Link to="/sleepTip"> More Tips</Link>
        </ArrowSlide>
        <ArrowSlide itemsName="Mytips4"  itemLable={false} >
          MytipsContent： This is a dummy tips content, waiting for sponser decision on tip content
          <Link to="/useTip"> More Tips</Link>
        </ArrowSlide>
    </div>

  );
}
export default Tips;
