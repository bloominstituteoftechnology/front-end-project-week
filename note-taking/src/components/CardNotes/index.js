import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class CardNotes extends Component {
  state = {
    notes: [],
    note: ''
  }

  handleSetData = data => this.setState({ notes: data });

  componentDidMount() {
    Axios
     .get("http://localhost:8000/api/notes")
     .then(response => {
       console.log("GET RESPONSE: ", response);
       this.setState({ notes: response.data });
     })
     .catch(err => {
       console.log(err);
     });
  };

  render() {
    return(
    <div>
      <Link to={`/${this.state.notes.id}/editnotes`}>
      Edit Notes
      </Link> />
    </div>
    )
  }
}

export default CardNotes;