import React from 'react'; 
import './NoteView.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

export default class NoteView extends React.Component  {
  constructor(props){
    super(props); 
    this.state = {
      note: {},
      redirect: false
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:4000/notes/${this.props.match.params.id}`)
      .then( (response) => {
        this.setState( () => ({ note: response.data }) )
      })
      .catch( (error) => console.error(error) );
  };
   
  handleDelete = (e) => {
    e.preventDefault();
    document.querySelector(".deleteOverlay").classList.toggle("hidden");
  };

  cancelDelete = (e) => {
    document.querySelector(".deleteOverlay").classList.toggle("hidden");
  };
   
  confirmedDelete = (e) => {
    axios.delete(`http://localhost:4000/notes/${this.props.match.params.id}`)
      .then( () => {
        this.setState( () => ({ redirect: true }) );
      })
      .catch( (error) => console.error(error) );
  };

    render(){
       if ( this.state.redirect === true ) {
        return (<Redirect to="/" />);
      } 
      return(
        <div>
          <div className="deleteOverlay hidden">
            <div className="delete">
              <div className='deleteText'>Are you sure you want to delete this?</div>
              <div className="deleteButton">
                <div className= "buttonRed" onClick={this.confirmedDelete}>Delete</div>
                <div className="buttonBlue" onClick={this.cancelDelete}>No</div>
              </div>
            </div>
          </div>
          <div className='noteView-menu'>
            <h6>
              <Link style={{color: 'black'}} to={`/Edit/${this.props.match.params.id}`}>edit </Link>
            </h6>
            <h6>
              <Link style={{color: 'black'}} to={`/delete/${this.state.note._id}`} onClick={this.handleDelete}>delete</Link>
            </h6>
          </div> 
          <h3>{this.state.note.title}</h3> 
          <div className="note-textBody"> 
            <h5>{this.state.note.textBody}</h5> 
          </div> 
        </div>  
      )
    }
}
