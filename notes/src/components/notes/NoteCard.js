import React, { Component } from "react";
import Moment from "react-moment";
import axios from 'axios';
import { Link } from "react-router-dom";



// const NoteCard = props => {


// noteDetails = () => {

//   const { notes, match } = this.props
//   const oneNote = notes.filter( item => item.id === Number(match.params.id))
//   this.setState({id: this.props.match.params.id}) 
//   }

  
//   return (
//     <div className="container">
//       <div className="card-action">
//       </div>
//     <div className="note-title">  
//         <h3>{props.note.title}</h3>
//       </div>
//       <div className="note-text">
//         <h3>{props.note.textBody}</h3>
//       </div>
//       <div className="note-date">
//         <Moment from="2018-11-19">2018-11-11T12:59-0500</Moment>
//       </div>
//     </div>
//   );
// };



class NoteCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      note: []
   }
console.log( this.state )
  }


    noteDetails = () => {
  let id = this.props.note._id;
  axios.get(`https://fe-notes.herokuapp.com/note/get/${this.props.note._id}`)
     .then(response => {this.setState({note: response.data})})
     .catch(err => console.log(err))
     console.log("state", this.state)

  // const oneNote = notes.filter( item => item.id === Number(this.props.note._id))
  }



  render() {
  
    return (
   <div className="container" onClick={this.noteDetails} >
      <Link to={`/note/${this.props.note._id}` }>

    <div className="note-title">  
        <h3>{this.props.note.title} -</h3>
   
      </div>
      <div className="note-text">
        <h3>{this.props.note.textBody}</h3>
      </div>
      <div className="note-date">
        {/* <Moment from="2018-11-19">2018-11-11T12:59-0500</Moment> */}
      </div>
      </Link>
    </div>
    );
  }
}



export default NoteCard;
