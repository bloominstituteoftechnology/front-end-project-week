import React from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import {addNote} from '../../actions';
import {NoteFormPage,NoteFormHeading,NoteForm,NoteFormButton,NoteFormInput,NoteFormTextArea} from './styledNoteFormComponents.js';

class NewNote extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:'',
            content:'',
            tags:''
        }
    }
    handleInputChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    componentDidMount(){
        localStorage.setItem('location',this.props.location.pathname);
    }
    createnewNoteObj=(e)=>{
        if (this.state.title.length===0 || this.state.content.length===0) {
            alert('A note needs to have title and content.')
        } 
        else {
            e.preventDefault();
            let tags;
            if (this.state.tags.length>0) {
                tags=this.state.tags.replace(/,/g,'').replace(/\s+/g,' ').replace(/\s/g,', ');
                if (tags[tags.length-2]===',') {
                    tags=tags.substring(0,tags.length-2);
                }
            }
            const newNote={
                title:this.state.title,
                textBody: this.state.content,
                tags: tags!==undefined?tags:null,
                user_id:localStorage.getItem('id')
            }
            this.props.addNote(newNote,this.props.history);
        }
    }
    render() {
        return(
            <NoteFormPage>
                <NoteFormHeading>Create New Note:</NoteFormHeading>
                <NoteForm>
                    <NoteFormInput name='title' type='text' placeholder='Note Title' value={this.state.title} onChange={this.handleInputChange}/>
                    <NoteFormTextArea name='content' type='text' placeholder='Note Content' value={this.state.content} onChange={this.handleInputChange}/>
                    <NoteFormInput name='tags' type='text' placeholder='Note Tags' value={this.state.tags} onChange={this.handleInputChange}/>
                    <NoteFormButton type='submit' onClick={this.createnewNoteObj}>Save</NoteFormButton>
                </NoteForm>
            </NoteFormPage>
        )
    }
}
const mapStateToProps=state=>{
    return {
        state
    }
}
export default connect(mapStateToProps,{addNote})(withRouter(NewNote));