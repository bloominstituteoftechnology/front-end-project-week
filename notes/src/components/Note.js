import React, {Component} from "react";
import '../App.css'

export default class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note:{},
      notes: this.props.notes,
    }
  }     
  componentDidMount() {
    // console.log('looking for match params', this.props.match.params.id)
    
    let searchID ;
    if(this.props.id){
      searchID = this.props.id;     
    } else {
      searchID = this.props.match.params.id
    }
  
    const foundNote = this.state.notes.find(note => note.id === Number(searchID))
  
    if(!foundNote) return;
    this.setState(() => ({note: foundNote}));
  }


  render(){

  return (
    <div className="notecard">
      <div className="notecard-title">{this.state.note.title}</div>

      <div className="notecard-note">{this.state.note.note}</div>
    </div>
    );
  }
}
