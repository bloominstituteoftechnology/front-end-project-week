import React, {Component} from 'react';
import Axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class SingleNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: null,
      deleting: false,
      currentId: ''
    }
  };
  componentDidMount(){
    const {id} = this.props.match.params;
    this.singleNote(id);
  };
  singleNote(id) {
    Axios
      .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
      .then(response => {
        this.setState(() => ({ note: response.data }));
      })
      .catch(err => {console.log(err)});
  };
  toggleDeletingOn=()=> { 
    const id = this.props.match.params.id
    this.setState(() => ({ deleting: true, currentId: id }));
  };
  toggleDeletingOff=()=> { 
    this.setState(() => ({ deleting: false }));
  };

  render() {
    if (this.state.deleting === true){
      return(
        <div className='delete-container'>
          <div className='delete-modal'>
            <p>Are you sure you want to delete this note?</p>
            <button onClick={()=>{this.props.handleDelete(this.state.currentId)}} className='delete'>Delete</button>
            <button onClick={this.toggleDeletingOff}>Cancel</button>
          </div>
        </div>
      );
    }    
    if (this.state.note === null) {
      return (
          <div className='container'>
              Fetching note...
          </div>
      );
    }
    return (
        <div className='single-container'>
          <div className='button-container'> 
            <Link to='/edit-form'>Edit</Link>
            <p onClick={this.toggleDeletingOn}>Delete</p>
          </div> 
          <h2>{this.state.note.title}</h2>
          <p>{this.state.note.textBody}</p>
        </div>
    );
  }
} 


const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

export default withRouter(connect(mapStateToProps,{})(SingleNote));
