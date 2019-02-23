import React, { Component } from 'react';
import SingleNote from './styles/SingleNote';
import Button from './styles/NoteButton';
import DeleteContainer from './styles/Delete';
import NoteStyle from './styles/NoteStyle';
import Card from './styles/SingleNoteView';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';

const API = `https://venkynotesapi.herokuapp.com` || `http://localhost:2300`;

class MyNote extends Component {
    constructor(props){
        super(props);
        this.state={
          note: [],
          title: '',
          content: '',
          showBox: false,
          deletedNote:false
        }
    }

componentDidMount() {
  const id = this.props.match.params.id;
     axios.get(`${API}/api/notes/${id}`)
//   axios.get(`https://fe-notes.herokuapp.com/note/get/${id}`)
        .then(res => {
           this.setState({title:res.data.title, content:res.data.content})
        })
        .catch(err => console.log(err));
        axios.put(`${API}/api/notes/${id}`)        
//   axios.put(`https://fe-notes.herokuapp.com/note/delete/${id}`)      
}

toggleBox = () => {
    this.setState({showBox: !this.state.showBox})
}  
delNote = (event) => {
    event.preventDefault();
   this.props.deleteContent(this.props.match.params.id);
   this.setState({ deletedNote:true })
}   

render() {
        const id = this.props.match.params.id;
        if(this.state.deletedNote) {
            return <Redirect to="/" />;
        }
        console.log('Line from my note',this.state.note)
        return (
        <div className='single-note'>
                <DeleteContainer style={{display: this.state.showBox ? 'flex' : 'none' }}> 
                    <p>Are you sure you want to delete this?</p>
                    <div className="delete">
                        <Button className='delete-button' onClick={this.delNote}>Delete</Button>
                         <Button className='no-button' onClick={this.toggleBox}>No</Button>
                    </div>
                </DeleteContainer> 
                <SingleNote>
                 <div className="note">
                     <div className="edit">
                        <Link to={`/edit/${id}`} >
                            <Button>Edit</Button>
                        </Link>  
                        <Button onClick={this.toggleBox}>Delete</Button>
                     </div>
                     <NoteStyle>
                    <Card>
                        <h3>{this.state.title}</h3>
                        <p>{this.state.content}</p>
                    </Card>
                    </NoteStyle>
                  </div>
                </SingleNote>
                  
            </div> 
            
        );
    }
}

export default MyNote;
