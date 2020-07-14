import React from 'react';
import './toggleswitch.css';
import {connect} from 'react-redux';
import { themeSwitch } from '../../Actions';

const ToggleSwitch = (props) => {
    return (
        <div>
        <label className="switch">
  <input type="checkbox"/>
  <span className="slider round" onClick={()=>{props.themeSwitch(props.nightVision)}}></span>
</label>
 </div>
    );
};

const mapStateToProps = state => {
    return {notes: state.notes,
    nightVision: state.nightVision,
    }   
}

export default connect(mapStateToProps, {themeSwitch} )(ToggleSwitch);