import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import EditNote from '../EditNote/EditNote';
import { Link } from 'react-router-dom';
import './SingleNoteview.css';
import { Button } from 'reactstrap';
import { dummydata as notes } from '../../dummydata/dummydata';



class SingleNoteView extends Component{
    constructor(props){
        super(props);
        this.state = {
            notes : {notes},
            modal: false,
            match: [],


        }
        this.toggle = this.toggle.bind(this);
    }


    // componentDidMount(){
    //     console.log("notes",notes);
    //     const routeId=this.props.match.params.id;
    //     const matched = notes.filter((note)=>{
    //         note.id===routeId;
    //         return this.setState(matched);
    //     });
    // componentWillMount(){
    //     console.log(notes);
    //     const routeId=this.props.match.params.id;
    //     const matched = notes.filter((note)=>{
    //         if(note.id===routeId){
    //            return this.setState(matched);
    //         }
    //         console.log('Matched Obj', matched)

    //     })
    // }
            
   

        
  

        

        
        
    
  
    toggle() {
      this.setState({
        modal: !this.state.modal
      });
    }
  
    render(){
        console.log('NoteView State',this.state.notes);
        console.log('NoteView Props',this.props)
        const id=this.props.match.params.id //this id is referring to the word 'edit' and not the number of the id...
        return(
            <div key = {this.state.notes.note_body}className="single-note-container">
                <Sidebar />
                <div className="single-note-wrapper">
                    <div className="link-wrapper">
                        <Link to = {`/edit/${id}`} component={EditNote}>
                        
                            <div className="link-button">edit</div>
                        </Link>
                        
                        <div 
                            className="link-button" 
                            onClick={this.toggle} 
                            toggle={this.state.modal}>
                            delete
                        </div>
                        <div>
                            <div 
                                className={this.state.modal? "modal-content": "hidden"} 
                                onClick={this.toggle} toggle={this.state.modal}>
                                <h5 className="modal-header">Are you sure you want to delete this note?</h5>
                                    <div className="modal-footer">
                                        <button className="delete-button">Delete</button>
                                        <button className="no-button">No</button>
                                    </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="text-wrapper">
                        <h4 className="text-title">{notes[0].note_title}</h4>
                        <p className = "text-body">{notes[0].note_body}</p>
                    </div>
                </div>
                
            </div>
        


    );
  }
}

        


export default SingleNoteView;

