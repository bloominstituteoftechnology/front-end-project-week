import React, { Component } from 'react';
import {Link, Route} from "react-router-dom";
import UpdateNote from './UpdateNote'
import Note from './Note'
import DeleteNote from './DeleteNote'


class Noteview extends Component {
  constructor(props){
    super(props)

  }
  componentWillMount(){
    this.props.handleViewNote(this.props.match.params.id)
  }
  render (){
    
    return (
      <li  className="noteviewCard bb6">
        <div className={`${this.props.cardhide}`}>
        <div class="card card2 bg-darks text-white">
<img className="" src={`https://picsum.photos/30/100/?${this.props.match.params.id}`}   alt="Card image" />
  <div className="card-img-overlay">
   
    <div class="card-header1">
  <Link to={`/Notes/${this.props.match.params.id}/edit`} ><a href="#" className="btn btn-info" >Edit</a></Link>
  <Link to={`/Notes/:id/delete`} ><a href="#" className="btn btn-danger" >Delete</a></Link>
  </div>
  </div>
</div>
        <div className="card" >
  
  <div className="card-header">
    {this.props.note.title}
  </div>
  <div className="card-body">
    <blockquote class="blockquote mb-0">
      <p className="card-textbody">{this.props.note.textBody}</p>
      <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
    </blockquote>
  </div>
</div></div>
<Route  path={`/Notes/${this.props.match.params.id}/edit`} render={() => 
        <UpdateNote 
        title= {this.props.note.title} 
        textBody = {this.props.note.textBody }
        id = {this.props.match.params.id}
        handleUpdateNote = {this.props.handleUpdateNote}
        handleInputChange2 = {this.props.handleInputChange2}
        />} />   
      <Route  path={`/Notes/${this.props.match.params.id}/delete`} render={() =>
           <DeleteNote 
            handleDeleteNote  = {this.props.handleDeleteNote}
            id = {this.props.note._id}
            />} /> 
 </li>
   
  );
};

}

export default Noteview;

