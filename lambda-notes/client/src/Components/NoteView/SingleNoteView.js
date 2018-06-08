import React, { Component } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import EditNote from '../EditNote/EditNote';
import { Link } from 'react-router-dom';
import './SingleNoteview.css';
import {connect} from 'react-redux';
import {fetchNote} from '../../JS/actions/index-a';
import {deleteNote} from '../../JS/actions/index-a';

const mapStateToProps = (state) =>{
   return {notesRedux:state}
}

class SingleNoteView extends Component{
    constructor(){
        super();
        this.state = {
            modal: false,
            matched: [],


        }
        this.toggle = this.toggle.bind(this);
    }

    
    toggle() {
      this.setState({
        modal: !this.state.modal
      });
    }

    handleDelete = ()=> {
        console.log(this.props, "delete")
        let todelete = this.state.matched[0].id;
        this.props.deleteNote(todelete);
        this.props.history.push('/');

    }
    componentWillMount(){
        console.log(this.props.notesRedux, "CWM");
        let routeId = this.props.match.params.id;
        let matched = this.props.notesRedux.note.filter((noteItem)=> 
          noteItem.id === Number(routeId)
     );
     this.setState({matched});

    }

    render(){
        const note_title = this.state.matched[0].note_title;
        const note_body = this.state.matched[0].note_body;
    return(
            <div className="single-note-container">
                <Sidebar />
                <div className="single-note-wrapper">
                    <div className="link-wrapper">
                        <Link to = {`/edit/${this.props.match.params.id}`} component={EditNote}>
                        <div className="link-button">edit</div>
                        </Link>
                        <div 
                            className="link-button" 
                            onClick={this.toggle} 
                            toggle={this.state.modal}>
                            delete
                        </div>
                        <div>
                            <div /*This div contains all the components of the modal*/
                                className={this.state.modal? "modal-content": "hidden"} 
                                onClick={this.toggle} toggle={this.state.modal}>
                                <h5 className="modal-header">Are you sure you want to delete this note?</h5>
                                    <div className="modal-footer">
                                        <button className="delete-button" onClick ={this.handleDelete}>Delete</button>
                                        <button className="no-button">No</button>
                                    </div>
                                {/* This div contains all the components of the modal */}
                            </div>
                        </div>
                    </div>
                    <div className="text-wrapper">
                        <h4 className="text-title"><h4>{note_title}</h4></h4>
                        <p className = "text-body">{note_body}</p>
                    </div>
                </div>
                
            </div>
        )
            
  }
}

        


export default connect(mapStateToProps, {fetchNote, deleteNote})(SingleNoteView);

