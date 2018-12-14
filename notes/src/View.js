import React, {Component} from "react";
import './index.css';
import Note from "./Note";
import Form from "./Form";
import {connect} from "react-redux";
import {getNotes,deleteNote} from "./Actions";
import {Link} from "react-router-dom";
  

class View extends Component{

    componentDidMount(){
        this.props.getNotes();
    }

    deleteHandler = (event,input) => {
        event.preventDefault();
        this.props.history.push('/')
        this.props.deleteNote(input)
    }



    render() {
        if(this.props.notes.length===0){
            return(
                <p>Loading...</p>
            )
        } else {
                const id = this.props.match.params.id;
                const note =  this.props.notes.find(note => id === note._id)
    
                if(!this.props.edit){
                    return(
    
                        <>       
                            <div className="update-wrapper" >
                                <Link className="update-button"to={`/note/${note._id}/edit`}>Edit</Link>
                                <Link className="update-button"to="#" onClick={(event,id = note._id) => this.deleteHandler(event,id)}>Delete</Link>
                            </div>
                            <Note id={note._id} title={note.title} textBody={note.textBody}/>
                        </>
                        );
                } else {
                    return(
                        <Form {...this.props} {...note}/>
                    );
                }
            }

    }
}

const mapStateToProps = state => {
return({
    notes:state.notes
})
}

export default connect(mapStateToProps,{getNotes,deleteNote})(View);


// {"id" in note._id ? note._id : # }

            // const {0:jsxObj=null} =  this.props.notes.filter(note => id === note._id)
            // .map( e => {
            //     const note = <Note 
            //     key={e._id} 
            //     name={e._id}
            //     title={e.title}
            //     textBody={e.textBody}
            //     _id={e._id}/>

            //     const form = <Form 
            //     key={e._id} 
            //     name={e._id}
            //     title={e.title}
            //     textBody={e.textBody}
            //     _id={e._id}/>
            //     return {note:note,form:form}
            //     }
            //     )


            //     const [note,form] = (jsxObj ? [jsxObj.note, jsxObj.form] : [null,null])
                // const url = (note ? `/note/${note.props._id}/edit` : "#" )