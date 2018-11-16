import React from 'react'; 
import './NoteView.css'
import axios from 'axios' 

export default class NoteView extends React.Component{
  constructor() {
    super();  
    this.state = {
      note: []
    }
  }
    
    componentDidMount() {
      axios
        .get(`https://fe-notes.herokuapp.com/note/get/${this.props.match.params.id}`)
        .then(response => {
          this.setState({ note: response.data });
        })
        .catch(err => console.log(err));
    }

    render() {
    return(
        <div>
          <h3>{this.state.note.title}</h3> 
          <div className="note-textBody"> 
            <h5>{this.state.note.textBody}</h5> 
          </div> 
        </div>  
    )
  }
}