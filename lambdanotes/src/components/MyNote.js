import React, { Component } from 'react';
import SingleNote from './styles/SingleNote';
import Button from './styles/NoteButton';
import DeleteContainer from './styles/Delete';
import NoteStyle from './styles/NoteStyle';
import Card from './styles/SingleNoteView';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';

class Note extends Component {
    constructor(props){
        super(props);
        this.state={
          note: [],
          title: '',
          textBody: " ",
          showBox: false,
          deletedNote:false
        }
    }

componentDidMount() {
  const id = this.props.match.params.id;
  axios.get(`https://fe-notes.herokuapp.com/note/get/${id}`)
        .then(res => {
           this.setState({title:res.data.title, textBody:res.data.textBody})
        })
        .catch(err => console.log(err));
  axios.put(`https://fe-notes.herokuapp.com/note/delete/${id}`)      
}

toggleBox = () => {
    this.setState({showBox: !this.state.showBox})
}  
delNote = (event) => {
    event.preventDefault();
   this.props.deleteContent(event,this.props.match.params.id);
   this.setState({ deletedNote:true })
}   
// deleteContent = (event) => {
//     event.preventDefault();
//     const id = this.state.note._id;
//     axios.delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
//          .then( response => {
//              this.setState({notes:[ response.data]})
//          })
//          .catch(err => { this.setState({ errorMessage: "Cannot delete it now"})
//     })
   
// }
    render() {
        const id = this.props.match.params.id;
        if(this.state.deletedNote) {
            return <Redirect to="/" />;
        }
        console.log(this.state.note)
        return (
            <div className='single-note'>
                <DeleteContainer style={{display: this.state.showBox ? 'flex' : 'none' }}> 
                    <p>Are you sure you want to delete this?</p>
                    <div className="delete">
                      <Link to='/'>
                          <Button className='delete-button' onClick={this.delNote}>Delete</Button>
                     </Link>  
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
                    {/* <h3>{this.state.note.title}</h3>
                    {this.state.note.textBody} */}
                    <NoteStyle>
                      <Card>
                        <h3>{this.state.title}</h3>
                        <p>{this.state.textBody}</p> 
                      </Card>  
                    </NoteStyle>
                </div>
                </SingleNote>  
               
            </div> 
            
        );
    }
}

export default Note;
