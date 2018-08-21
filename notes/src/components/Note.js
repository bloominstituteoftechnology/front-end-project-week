import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../App.css'

export default class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note:{},
      notes: this.props.notes,
      editId: null,
      addId: null
    }
  }     
  componentDidMount() {
    // console.log('looking for match params', this.props.match.params.id)
    
     
    let searchID;

    if(this.props.id){
      searchID = this.props.id;     
    } else if(this.props.match.params.id === !undefined){
      this.setState({addId: this.props.match.params.id })
    } else {
      searchID = this.state.addId
    }
  
    const foundNote = this.state.notes.find(note => note.id === Number(searchID))
  
    if(!foundNote) return;
    this.setState(() => ({note: foundNote}));


  }


  render(){

  return (
    <div className="notecard">

      <Link to={`/edit/${this.state.editId}`}><div>edit</div></Link>

      <div className="notecard-title">{this.state.note.title}</div>

      <div className="notecard-note">{this.state.note.note}</div>
    </div>
    );
  }
}
