import React, { Component } from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';
import Markdown from 'react-markdown'


class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            note: [],
            showModal: false
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id
        this.getNote(id);
    }

    getNote = id => {
        axios
            .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
            .then(response => this.setState({ note: response.data }))
            .catch(response=> console.log(response));
        }


        
    deletedNote = event => {
        event.preventDefault(event);
        this.props.deleteNote(event, this.state.note._id);
        this.props.history.push("/")
    }






            


    openModal = () => {
        this.setState({ showModal: true });
      };
    
      closeModal = () => {
        this.setState({ showModal: false });
      };
    











     