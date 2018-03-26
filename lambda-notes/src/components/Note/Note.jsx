import React, { Component } from 'react';
import './Note.css';

class Note extends Component {
   state = {
      index: "",
      title: "",
      content: "",
   }

   componentDidMount() {
      console.log(this.props);
      this.setState(
         {index: this.props.index, title: this.props.title, content: this.props.content}
      );
   }//end of CDM

   render() {
      return (
      <div className="note">
         <h3 className="noteTitle">
            {this.state.title}
         </h3>
         <div className="noteContent">
         {this.state.content}
         </div>
      </div>
      )
   } //end of render

}//End of NOTE

export default Note;