import React, { Component } from 'react';
import {  NoteContainer, ViewCard} from '../../style/style';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

class NoteView extends Component {
  constructor(props){
    super(props);
    this.state={
      note:[]
    }
  }

  componentDidMount(){
    const url = process.env.REACT_APP_API_URL
    axios
    .get(`${url}${this.props.match.params.id}`)
    .then(res =>{
      this.setState({
        note:res.data
      })
    })
    .catch(err =>{
      console.log(err)
    })
  }

  goto = () =>{
    this.props.history.push('/')
  }
  

  render() {
    return ( 
      <NoteContainer >
        <ViewCard>
        <div className='note-actions'>
        <Button color="link" onClick={this.goto}>Back</Button>
        <Link to={`editNote/${this.props.match.params.id}`}>
        <Button color="link">Edit</Button>
        </Link>
        <Button color="link" onClick={this.props.delete}>Delete</Button>
        </div>
          <h1 className="title">{this.state.note.title}</h1>,
          <p className="content">{this.state.note.textBody}</p>
        </ViewCard>
      </NoteContainer>
      
    );
  }
}

 
export default NoteView;