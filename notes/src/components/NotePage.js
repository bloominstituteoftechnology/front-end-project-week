import React, { Component } from 'react';
import axios from 'axios';

 class NotePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '',
      textBody: ''
    }
  };
   componentDidMount() {
    const id = this.props.match.params.id;
    this.getNote(id);
  }

   getNote = id => {
    axios 
      .get(`https://killer-notes.herokuapp.com/note/get/${id}`)
        .then(res => {
            this.setState({
            id: res.data._id,
            title: res.data.title,
            textBody: res.data.textBody
        });
      })
      .catch(err => (
        console.log(`Error: ${err}`)
      ));
  }
   render() {
    return (
    <React.Fragment>
        <div className='left-nav'>
          <button>Edit</button>
          <button>Delete</button>
        </div>
        
          <h3>{this.state.title}</h3>
          <p>{this.state.textBody}</p>
        
      </React.Fragment>  
      
    );
  }
}
 export default NotePage;