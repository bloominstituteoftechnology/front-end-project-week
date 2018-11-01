import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
class ViewNote extends Component {
    constructor(props) {
      super(props)
    //   const note  = this.props;
       this.state = {
        _id: '',
        title: '',
        textBody: '',
      }
    }
      componentDidMount() {
          axios
          .get(`https://fe-notes.herokuapp.com/note/get/${this.props.match.params.id}`)
          .then((response) => this.setState(response.data))

      }
      helper= () => {
        this.props.deleteNote(this.props.match.params.id)
        this.props.history.push('/')
      }
       render() {
        return (
            <div>
            <h2>{this.state.title}</h2>
            <p>{this.state.textBody}</p>
            <Link to={`/editnote/${this.state._id}`}>EDIT</Link>
            <button onClick={this.helper} >DELETE</button>

            </div>
        );
    }
}

export default ViewNote;
