import React, { Component } from 'react';
import {Link, Route} from "react-router-dom";
import ScrollArea from 'react-scrollbar'


import DeleteNote from './DeleteNote'
import UpdateNote from './UpdateNote'

class Noteview extends Component {


  
  componentWillMount(){
    this.props.handleViewNote(this.props.match.params.id)
  }
  render (){
    
    return (
  
            <li  className="noteviewCard bb6">
        <div className={`${this.props.cardhide}`}>
        <div class="card card2 bg-darks text-white">
<img className="" src={`https://picsum.photos/30/100/?${this.props.match.params.id}`}   alt={`Card${this.props.match.params.id}`} />

  <div className="card-img-overlay">
   
    <div class="card-header1">
  <Link to={`/Notes/${this.props.match.params.id}/edit`} className="btn2 btn-info" >Edit</Link>
  <Link to={`/Notes/${this.props.match.params.id}/delete`}  className="btn2  btn-danger" >Delete</Link>
  </div>
  </div>
</div>
<ScrollArea
            speed={0.8}
            className="area"
            contentClassName="content"
            horizontal={false}
            >
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
</div> </ScrollArea></div>
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

