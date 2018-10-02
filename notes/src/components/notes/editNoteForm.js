import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateNote} from '../../actions';
import {NoteFormPage,NoteFormHeading,NoteForm,NoteFormButton,NoteFormInput,NoteFormTextArea} from './styledNoteFormComponents.js';

class EditNoteForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:'',
            content:'',
            id:'',
            tags:''
        }
    }
    handleInputChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    componentDidMount() {
        localStorage.setItem('location',this.props.location.pathname);
        if (this.props.note.title && this.props.note.textBody) {
            this.setState({title:this.props.note.title,
                content:this.props.note.textBody,
                id:this.props.note.id,
                tags:this.props.note.tags?this.props.note.tags.replace(/,/g,''):''}
            ,()=>localStorage.setItem('note',JSON.stringify(this.state)));
        } else {
            const note=JSON.parse(localStorage.getItem('note'));
            this.setState({title:note.title,
                content:note.content,
                id:note.id,
                tags:note.tags});
        }
    }
    editNoteObj=(e)=>{
        e.preventDefault();
        let tags=this.state.tags.replace(/,/g,'').replace(/\s+/g,' ').replace(/\s/g,', ');
        if (tags[tags.length-2]===',') {
            tags=tags.substring(0,tags.length-2);
        }
        const editedNote={
            title:this.state.title,
            textBody: this.state.content,
            tags: tags,
            user_id:localStorage.getItem('id')
        }
        this.props.updateNote(this.state.id,editedNote,this.props.history);
    }
    render() {
        return(
            <NoteFormPage>
                <NoteFormHeading>Create New Note:</NoteFormHeading>
                <NoteForm>
                    <NoteFormInput name='title' type='text' placeholder='Note Title' value={this.state.title} onChange={this.handleInputChange}/>
                    <NoteFormTextArea name='content' type='text' placeholder='Note Content' value={this.state.content} onChange={this.handleInputChange}/>
                    <NoteFormInput name='tags' type='text' placeholder='Note Tags' value={this.state.tags} onChange={this.handleInputChange}/>
                    <NoteFormButton type='submit' onClick={this.editNoteObj}>Save</NoteFormButton>
                </NoteForm>
            </NoteFormPage>
        )
    }
}
const mapStateToProps=state=>{
    return {
        note:state.note
    }
}
export default connect(mapStateToProps,{updateNote})(withRouter(EditNoteForm));