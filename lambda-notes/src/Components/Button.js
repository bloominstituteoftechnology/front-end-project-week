import React from 'react';
import { Link } from "react-router-dom";
import './Components.css';

const Button = props => <Link to={props.link}><button className='button'>{props.text}</button></Link>

export default Button;