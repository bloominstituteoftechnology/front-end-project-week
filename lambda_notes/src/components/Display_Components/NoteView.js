import React, { Component } from 'react'
import DeleteModal from './DeleteModal';
import axios from 'axios';

export default class NoteView extends Component {

    state = {
     
    }


    componentDidMount() {
        // const id = this.props.params.id
        // this.getNote(id);
        console.log(this.props)
    }

    getNote = (id) => {
        axios.get(`https://fe-notes.herokuapp.com/note/get/${id}`)
        .then(res => this.setState({ note: res.data }))
        .catch(res => console.log( res ));
        }

  render() {
    return (
      <div>
        <DeleteModal/>
      </div>
    )
  }
}
