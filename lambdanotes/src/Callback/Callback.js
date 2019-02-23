import React, { Component } from 'react';
import loading from './loading.svg';

class Callback extends Component {
  render() {
    //const style = //...

    return (
    //   <div style={style}>
    <div>
        <img src={loading} alt="loading"/>
    </div>
    );
  }
}

export default Callback;