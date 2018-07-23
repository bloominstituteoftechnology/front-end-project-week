import React from 'react';
import ReactDOM from 'react-dom';
import NotesApp from './components/NotesApp'
import 'normalize.css/normalize.css';
import './styles/styles.scss';


ReactDOM.render(
  <NotesApp />,
  document.getElementById('app')
)