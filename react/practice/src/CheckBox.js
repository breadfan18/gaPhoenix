import React from "react";

/* 
Component Example:
Complete this component so that it has labelOn 
and labelOff props and the appropriate label is 
shown based on the checkbox checked state.
*/
const Checkbox = ({checked, setChecked}) => (
  <label>
    <input
      type="checkbox"
      onClick={() => setChecked()}
    />
  {checked ? 'ON' : 'OFF'} 
  </label>
  
);

export default Checkbox;