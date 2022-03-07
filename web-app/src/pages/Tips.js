import React from 'react';
import ArrowSlide from "../components/Expansion"
const Tips = () =>{
  return (
    <div>
      <h3>Tips </h3>
        <ArrowSlide itemsName="Mytips"  itemLable={false} > MytipsContent </ArrowSlide>
        <ArrowSlide itemsName="Mytips2"  itemLable={false} > MytipsContent </ArrowSlide>
    </div>

  );
}
export default Tips;
