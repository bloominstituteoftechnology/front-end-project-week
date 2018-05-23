// React Imports Here
import React, { Component } from "react";
// Redux Imports Here
import { connect } from "react-redux";
/* Remember to Import Actions Here
import ActionName from '../actions/actionfile'; */

class Template extends Component {
  render() {
    return (
      <div>
        <h4>Template Redux Connected Component</h4>
        <h4 style={{ color: "red" }}>{this.props.store[0].template}</h4>
      </div>
    );
  }
}

/* 
Helper function to acess the whole Redux Store
or a portion of that Redux Store, depending on 
what data this component needs to consume.
*/
const mapStateToProps = store => {
  return {
    store: store
  };
};

/* Connect ( helperFunction  , { actions if any })  ( ComponentName ) */
export default connect(mapStateToProps, {
  /*Actions Go Here Separated by Comas*/
  /*For Example*/
  /*actionone, actiontwo, actionthree*/
})(Template);
