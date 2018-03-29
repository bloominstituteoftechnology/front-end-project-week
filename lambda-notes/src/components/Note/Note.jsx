import React, { Component } from 'react';
import './Note.css';
import { withRouter } from 'react-router-dom';
class Note extends Component {
   state = {
      index: "",
      title: "",
      content: "",
      tags: [],
   }

   componentDidMount() {
      console.log(this.props);
      this.setState(
         {index: this.props.index, title: this.props.title, content: this.props.content, tags:this.props.tags}
      );
   }//end of CDM

   render() {
      return (
      <div className="note" onClick={() => this.props.history.push(`/viewNote/${this.props.index}`)}>
         <h3 className="noteTitle">
            {this.state.title.length > 20 ? (this.state.title.substr(0, 19) + "...") : (this.state.title)}
         </h3>
         <div className="noteContent">
            {this.state.content.length > 170 ? (this.state.content.substr(0, 190) + "...") : (this.state.content)}
         </div>
         <div className="noteTags">
            {this.props.tags ? this.props.tags.map((tag, i) => <span className="listNoteTag" key={i}> {tag} </span>): null}
         </div>
      </div>
      )
   } //end of render

}//End of NOTE

export default withRouter(Note);