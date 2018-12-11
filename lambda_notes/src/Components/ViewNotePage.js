import React, { Component } from "react";
import axios from "axios";
import DeleteModalPage from './DeleteModalPage';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


class ViewNote extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      textBody: "",
      id: '',
      modal: false,
    }
  }


  componentDidMount() {
    console.log('TESTcomponentDidMount.axios.get');
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${this.props.match.params.id}`)
      .then(res => { console.log('Logged resonse: ', res);
        this.setState({ textBody: res.data.textBody, title: res.data.title, id: res.data._id });
      })
      .catch(err => console.log(err));
  }



  render() {
    return (
      
    );
  }
}

export default ViewNote;

