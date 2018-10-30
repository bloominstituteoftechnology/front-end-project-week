import React, {Component} from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
class SingleNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: null
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

  render() {
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
            <a>Delete</a>
          </div> 
          <h2>{this.state.note.title}</h2>
          <p>{this.state.note.textBody}</p>
          {/* <span onClick={() => this.deleteHandler(this.state.note._id)}>X</span> */}
        </div>
    );
  }
} 


export default SingleNote;