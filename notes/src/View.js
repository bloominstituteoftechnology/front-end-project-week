import React, {Component} from "react";
import './index.css';
import Note from "./Note";
import Form from "./Form";
import {connect} from "react-redux";
import {getNotes} from "./Actions";
import {Link} from "react-router-dom";

class View extends Component{

    componentDidMount(){
        this.props.getNotes();
    }

    render() {

            const id = this.props.match.params.id;

            const test =  this.props.notes.find(note => id === note._id)


            const {0:jsxObj=null} =  this.props.notes.filter(note => id === note._id)
            .map( e => {
                const note = <Note 
                key={e._id} 
                name={e._id}
                title={e.title}
                textBody={e.textBody}
                _id={e._id}/>

                const form = <Form 
                key={e._id} 
                name={e._id}
                title={e.title}
                textBody={e.textBody}
                _id={e._id}/>
                return {note:note,form:form}
                }
                )


                const [note,form] = (jsxObj ? [jsxObj.note, jsxObj.form] : [null,null])
                // const url = (note ? `/note/${note.props._id}/edit` : "#" )
            if(!this.props.edit){

                return(

                    <>       
                        <Link to={`/note/${test._id}/edit`}>Edit</Link>
                        <br />
                        <Link to="#">Delete</Link>
                        {note}
                    </>
                    );
            } else {
                return(
                    <Form {...this.props} {...test}/>
                );
                // return(<>{form}</>);
            }
    }
}

const mapStateToProps = state => {
return({
    notes:state.notes
})
}

export default connect(mapStateToProps,{getNotes})(View);


// {"id" in note._id ? note._id : # }