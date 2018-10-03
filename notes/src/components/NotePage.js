import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const NoteCard = styled.div`
  width: 180px;
  height: 100%;
  margin-bottom: 25px;
  border: 1px solid gray;
  background: lightgreen;
  color: black;
  font-weight: bold;
  font-size: 14px;
`;

 class NotePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '',
      textBody: ''
    }
  };
   componentDidMount() {
    const id = this.props.match.params.id;
    this.getNote(id);
  }

   getNote = id => {
    axios 
      .get(`https://killer-notes.herokuapp.com/note/get/${id}`)
        .then(res => {
            this.setState({
            id: res.data._id,
            title: res.data.title,
            textBody: res.data.textBody
        });
      })
      .catch(err => (
        console.log(`Error: ${err}`)
      ));
  }
   render() {
    return (
    <React.Fragment>
        <div className='left-nav'>
        <Link to={`/edit-note/${this.props.match.params.id}`}>
          <button>Edit</button>
        </Link>
          <button>Delete</button>
        </div>
        <NoteCard>
          <h3>{this.state.title}</h3>
          <p>{this.state.textBody}</p>
        </NoteCard>
      </React.Fragment>  
      
    );
  }
}
 export default NotePage;