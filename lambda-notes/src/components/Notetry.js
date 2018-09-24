import React, { Component } from 'react';
import axios from 'axios';

export default class Notetry extends Component {
    constructor(props) {
      super(props);
      this.state = {
        note: null
      };
    }
  
    componentDidMount() {
      
      const _id = this.props.match.params._id;
      
      this.fetchNote(_id);
    }
  
    fetchNote = _id => {
      axios
        .get(`https://killer-notes.herokuapp.com/note/get/${_id}`)
        .then(response => {
          console.log(response)
          this.setState(() => ({ note: response.data }));
        })
        .catch(error => {
          console.error(error);
        });
    };
  
    render() {

      if (!this.state.note) {
        return <div>Loading note information...</div>;
      }
  
      const { textBody, title } = this.state.note;
      console.log(this.state.note._id)
      return (
        <div>
          
          <div className="note-card">
            <h2>{title}</h2>
            <h6>{textBody}</h6>
          </div>
        </div>
      );
    }
  }