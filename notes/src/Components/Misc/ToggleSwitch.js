import React from 'react';
import './toggleswitch.css';

const ToggleSwitch = () => {
    return (
        <React.Fragment>
        <label className="switch">
  <input type="checkbox"/>
  <span className="slider round"></span>
</label>
 </React.Fragment>
    );
};

export default ToggleSwitch;