import React, { Component } from 'react';
import { 
  Route,
  Redirect,
  } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import App from './App';
import {Welcome} from './components'

const FirstAuth = () => {
    //if token go to app if not go to welcome

      if(localStorage.getItem('JWT')){
        this.props.history.push('/')
      } else {
        return (<Route path="/welcome/" component={Welcome} />
        )
      }
}

export default FirstAuth

        