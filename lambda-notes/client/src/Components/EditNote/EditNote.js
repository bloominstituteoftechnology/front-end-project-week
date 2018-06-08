import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Button, Form,  Input } from 'reactstrap';
import { connect } from 'react-redux';
import Sidebar from '../Sidebar/Sidebar';
import './EditNote.css';
import NoteContainer from "../NoteContainer/NoteContainer";
import { HeaderName } from '../NoteCard/NoteCard';
import {updateNote} from '../../JS/actions/index-a';

const mapStateToProps = (state)=> {
    return ({updateState:state})
}

class EditNote extends Component {
    constructor(props){
        super(props);
        this.state ={
            fetching:[],
        }
    }

    componentWillMount(){
        let id = this.props.match.params.id;
        let fetching = this.props.updateState.note.filter((note) =>{
            if (note.id==id){
                return note;
            }
        });
        this.setState({fetching})
    }

    changeHandler = () =>{
        console.log(this.props, "changeHandler")
    }
    render() {
        console.log(this.state.fetching[0].note_title, "EditNote props");
        return(
            <div className = 'create-wrapper'>
                <Sidebar />
                <Form className = "main-container form-create">
                    <HeaderName text="Edit Note:"/>
                        <Input 
                            type="text" 
                            name="title" 
                            id="notetitle" 
                            value={`${this.state.fetching[0].note_title}`}
                            className ="input-title form-part"
                            /*onChange for each of these inputs to come later*/
                            />
                            <br/>
                            <br/>
                        <Input 
                            type="textarea" 
                            name="text" 
                            id="notebody" 
                            value ={`${this.state.fetching[0].note_body}`}
                            className="input-content form-part"
                            /*onChange for each of these inputs to come later*/

                            />
                        <Button className = 'button-save'>
                            <Link to = '/' component = {NoteContainer} className="link">
                            {/* /*onSubmit for this button to come later*/}

                            Update
                            </Link>
                        </Button>
                </Form>
            </div>
                );
        }
    }
    export default connect(mapStateToProps, {updateNote})(EditNote);