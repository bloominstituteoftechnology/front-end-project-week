import React from 'react'; 
import './NoteView.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

export default class NoteView extends React.Component  {
  constructor(props){
    super(props); 
    this.state = {
      note: [],
      redirect: false
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:5566/api/notes/${this.props.match.params.id}`)
    .then( response => {
        this.setState({ 
          note: response.data 
        })   
        console.log(this.state.note)
      })
      .catch(error => console.error(error) );
  };
   
  handleDelete = (event) => {
    event.preventDefault();
    document.querySelector(".deleteOverlay").classList.toggle("hidden");
  };

  cancelDelete = (event) => {
    document.querySelector(".deleteOverlay").classList.toggle("hidden");
  };
   
  confirmedDelete = (event) => {
    axios.delete(`http://localhost:5566/api/notes/${this.props.match.params.id}`)
      .then( () => {
        this.props.getNotes()
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
            <div className="deleteBox">
              <div className='deleteText'>Are you sure you want to delete this?</div>
              <div className="deleteButtons">
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
              <Link style={{color: 'black'}} to={`/delete/${this.state.note.id}`} onClick={this.handleDelete}>delete</Link>
            </h6>
          </div> 
          {this.state.note.map(item => (
            <div key={item.id}> 
               
              <div className="note-textBody">
                <h3 className='noteview-title'>{item.title}</h3>
                <h5>{item.textBody}</h5> 
                <img alt='view-note' className="noteview-image" src={item.image}/>
              </div> 
            </div> 
          ))} 
        </div>  
      )
    }
}
