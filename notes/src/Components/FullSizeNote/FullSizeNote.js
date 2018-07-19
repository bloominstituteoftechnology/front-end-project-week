import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlexDiv, MiniBox, FlexNotes, PrimaryButton, DeleteButton } from '../StyledComponents/StyledComponents';
import { getNotes, addNote, editNotes } from '../../Actions/';
import MiniNote  from '../MiniNote/MiniNote';
import { Scrollbars } from 'react-custom-scrollbars';
import {withRouter, Redirect} from 'react-router-dom';
// import ContentEditable from 'react-contenteditable';
import Loader from '../Loader/Loader';
import styled from 'styled-components';


const FlexDivColumn = FlexDiv.extend`
position: relative;
z-index: 5;
flex-direction: column;
justify-content: center;
align-items: center;
flex-wrap: nowrap;
`

const SolidStyleTextArea = styled.textarea`
border: none;
background-color: white;
 width: 90%;
 height: 60vh;
 padding: 5px;
 overflow-y: auto;
 
` 
const DashedStyleTextArea = styled.textarea`
border: 3px dashed lightgrey;
background-color: white;
    width: 90%;
    height: 60%;
    padding: 5px;
    overflow-y: auto;
    margin-top: 10px;
`
const DashedStyleHeader = DashedStyleTextArea.extend`
height: 5%;
width: 80%;

`
const SolidStyleHeader = SolidStyleTextArea.extend `
height: 5%;
width: 80%;

`
const SaveButton = PrimaryButton.extend`
width: 100px;
height:50px;
`
const Tip = styled.h2`
color: lightgrey;
text-align: center;
font-size: 20px;

`


class FullSizeNote extends Component {
    constructor(props) {
        super(props);
        this.state={
            title: '',
            content: '',
            contentEditable: false,
            toNotes: false,
        }
    }
    componentDidMount() {
        let note_id = this.props.match.params.id

        console.log('didmount_id', note_id)
        let thisNote = this.props.notes.filter(note => note_id == note.id)
        thisNote = thisNote.pop();
        console.log('didmount_thisNote', thisNote)
        this.setState({title:thisNote.title, content:thisNote.content})
    }

    // saveNote = (e, note) => {
    //  e.preventDefault();
    //  this.props.addNote(note)
    // }

    saveChanges = (e, savedNote, myhistory) => {
         if (e.keyCode === 13 && e.ctrlKey) {
             console.log('c+enter', e.target.value)
             this.setState({
                 contentEditable: !this.state.contentEditable
                })
              
            console.log('saved note!:', savedNote)

            this.props.editNotes(e, savedNote, myhistory);

         }
    }

    onChange = (e) => {
        console.log(e);
        this.setState({
            [e.target.name] : e.target.value || e.target.defaultValue
        })
    }

    editContent = (e) => {
        e.preventDefault();
        console.log('event!', e.target.value);
        this.setState({
            contentEditable: !this.state.contentEditable,
          

        })
    }

    render() {

       
        let myhistory = this.props.history;
        console.log('notes', this.props.notes);
        let note_id = this.props.match.params.id
        let thisNote = this.props.notes.filter(note=> note_id == note.id)
        let savedNote = {id: note_id, title: this.state.title, content: this.state.content}
    
        
        // this.setState({
        //     content:thisNote[0].content,
        //     title:thisNote[0].title
        // })
        console.log('thisNote', thisNote);

        if (this.props.saveInProgress) {
            return (<FlexDivColumn><Loader/></FlexDivColumn>)
        } else if (this.props.saved) {
            return (<FlexDivColumn><h1>SAVED!</h1></FlexDivColumn>)
        }
        
        else {

        return (
            <FlexDivColumn>
            
                {this.state.contentEditable? 
                <React.Fragment>
                   <Tip>Tip: Double Click Text to Edit, Ctrl + Enter to Save!</Tip>
                    <DashedStyleHeader onKeyUp={(e)=>{this.saveChanges(e, savedNote, myhistory)}} onDoubleClick={(e)=>{this.editContent(e)}} name='title' onChange={this.onChange} value={this.state.title? this.state.title : thisNote[0].title}/>
                <DashedStyleTextArea name='content' onKeyUp={(e)=>{this.saveChanges(e, savedNote, myhistory)}} defaultValue={this.state.content? this.state.content : thisNote[0].content} onChange={this.onChange}> 
                </DashedStyleTextArea>
                 
                 </React.Fragment>
               : 
               <React.Fragment>
                 <Tip>Tip: Double Click Text to Edit, Ctrl + Enter to Save!</Tip>
                  <h1 onDoubleClick={this.editContent}>{this.state.title}</h1>
                 <SolidStyleTextArea name='content' value={this.state.content} readOnly html={this.state.html} onDoubleClick={this.editContent} onChange={this.onChange}> 
                </SolidStyleTextArea> 
                
                </React.Fragment>}

         
            </FlexDivColumn>
        );
    }
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes,
        saveInProgress: state.saveInProgress,
        saved: state.saved,

    }
}

export default withRouter(connect(mapStateToProps, { getNotes, addNote, editNotes })(FullSizeNote));