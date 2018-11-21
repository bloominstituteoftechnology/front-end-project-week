import React, { Component } from 'react';
import SingleNote from './styles/SingleNote';
import Button from './styles/NoteButton';
import DeleteContainer from './styles/Delete';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Note extends Component {
    constructor(props){
        super(props);
        this.state={
          note: [],
          showBox: false
        }
    }

componentDidMount() {
  const id = this.props.match.params.id;
  axios.get(`https://fe-notes.herokuapp.com/note/get/${id}`)
        .then(res => {
           this.setState({note: res.data})
        })
        .catch(err => console.log(err));
  axios.put(`https://fe-notes.herokuapp.com/note/delete/${id}`)      
}

toggleBox = () => {
    this.setState({showBox: !this.state.showBox})
}  
// delNote = (event, id) => {
//     event.preventDefault();
//    this.props.deleteContent(event,id);
//    this.setState({
//        showBox:false
//    })
// }   
deleteContent = (event) => {
    event.preventDefault();
    const id = this.state.note._id;
    axios.delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
         .then( response => {
             this.setState({notes:[ response.data]})
         })
         .catch(err => { this.setState({ errorMessage: "Cannot delete it now"})
    })
   
}
    render() {
        const id = this.props.match.params.id;
        console.log(this.state.note)
        return (
            <div className='single-note'>
                <DeleteContainer style={{display: this.state.showBox ? 'flex' : 'none' }}> 
                    <p>Are you sure you want to delete this?</p>
                    <div className="delete">
                      <Link exact to='/'>
                          <Button className='delete-button' onClick={this.deleteContent}>Delete</Button>
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
                    <h3>{this.state.note.title}</h3>
                    {this.state.note.textBody}
                </div>
                </SingleNote>  
            </div> 
            
        );
    }
}

export default Note;
