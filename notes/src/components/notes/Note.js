import React, { Component } from "react";
import Moment from "react-moment";
import axios from "axios";
import { Link } from "react-router-dom";
import DeleteModal from "./DeleteModal";


class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: [],
      isOpen: false 
    };
  
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  componentDidMount(){
    this.getNote(this.props.match.params.id)
 }
  componentWillReceiveProps(noteProps) {
    if(this.props.match.params.id !== noteProps.match.params.id){
       this.getNote(noteProps.match.params.id)
    }
 }
  getNote = id => {
    axios.get(`https://fe-notes.herokuapp.com/note/get/${id}`)
       .then(response => {this.setState({note: response.data})})
       .catch(err => console.log(err))
 }
  render(){
    return(
       <>
          <div>
             <Link to={`/edit/${this.state.note._id}`} >
                <p>edit</p>
             </Link>
            
                <p onClick={this.toggleModal} >delete</p>
            
          </div>
          <div>
             <h2>{this.state.note.title}</h2>
             <p>{this.state.note.textBody}</p>

               <DeleteModal show={this.state.isOpen} 
          onClose={this.toggleModal} key={this.state.note._id} note_id={this.state.note._id}>
          Here's some content for the modal
        </DeleteModal>

          </div>
       </>
    )
 }
}


export default Note;
