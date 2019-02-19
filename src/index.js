import dotenv from 'dotenv';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';

dotenv.config();

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));