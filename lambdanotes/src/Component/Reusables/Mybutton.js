import React from 'react';
import {Button} from 'reactstrap';
import styles from '../../Styles/Mybutton.css';

const Mybutton = (props) => {
  return (
    <div>
      <button type="button" class="btn btn-primary">{props.text}</button>
    </div>
  )
};

export default Mybutton;
