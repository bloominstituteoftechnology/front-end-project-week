import React, { Component } from 'react';
import {  NoteContainer, ViewCard} from '../../style/style';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

class NoteView extends Component {
  constructor(props){
    super(props);
    this.state={
      note:[],
    }
  }

  componentDidMount(){
    const url = process.env.REACT_APP_API_URL
    const token = localStorage.getItem('jwt');
    const options = {
      headers: {
          Authorization: token
      }
    }
    axios
    .get(`${url}/${this.props.match.params.id}`,options)
    .then(res =>{
      console.log(res)
      this.setState({
        note:res.data
      })
    })
    .catch(err =>{
      if(err.msg ==="invalid token" ){
        this.props.history.push('/')
      }
    })
  }

  goto = () =>{
    this.props.history.push('/notes')
  }
  

  render() {
    console.log(this.state.note)
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
        {this.state.note.map(note =>{
        return[
          <h1 className="title">{note.title}</h1>,
          <p className="content">{note.textBody}</p>
        ]
        })}
        </ViewCard>
      </NoteContainer>
      
    );
  }
}

 
export default NoteView;