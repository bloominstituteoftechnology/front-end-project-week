import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlexDiv, MiniBox, FlexNotes, PrimaryButton } from '../StyledComponents/StyledComponents';
import { getNotes, addNote } from '../../Actions/';
import MiniNote  from '../MiniNote/MiniNote';
import { Scrollbars } from 'react-custom-scrollbars';
import {withRouter, Redirect} from 'react-router-dom';
// import ContentEditable from 'react-contenteditable';
import styled from 'styled-components';
import Loader from '../Loader/Loader';

const SolidStyleTextArea = styled.textarea`
border: 3px solid lightgrey;
background-color: white;
 width: 90%;
 height: 60%;
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
border-left: none;
`


class NewNote extends Component {
    constructor(props) {
        super(props);
        this.state={
            title: '',
            content: '',
            contentEditable: true,
            toNotes: false,
        }
    }
    componentDidMount() {
    }

    // saveNote = (e, note) => {
    //  e.preventDefault();
    //  this.props.addNote(note)
    // }

    onChange = (e) => {
        console.log(e);
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    editContent = () => {
        this.setState({contentEditable: !this.state.contentEditable})
    }

    render() {
        let note = {
        
            title: this.state.title,
            content: this.state.content
        }
        let history = this.props.history;

          if (this.props.saveInProgress) {
              return ( <FlexDiv> <Loader/> </FlexDiv>)
              }
              else if (this.props.saved) {
              return ( <FlexDiv> <h1> SAVED! </h1></FlexDiv> )
              } else {

        return (
            
            <FlexDiv>
                
                {this.state.contentEditable? 
                <React.Fragment>
                <DashedStyleHeader name='title' onChange={this.onChange} defaultValue='Title...'/>
                <DashedStyleTextArea name='content' value={this.state.content} onChange={this.onChange}> 
                </DashedStyleTextArea> <SaveButton onClick={(e)=>{this.props.addNote(e, note, history )}}>Save</SaveButton></React.Fragment>
               : 
               <React.Fragment>
                  <SolidStyleHeader defaultValue='Title...' onDoubleClick={this.editContent}/>
                 <SolidStyleTextArea name='content' value={this.state.content} readOnly html={this.state.html} onDoubleClick={this.editContent} onChange={this.onChange}> 
                </SolidStyleTextArea> <SaveButton onClick={addNote}>Save</SaveButton>
                </React.Fragment>}

           
           

         
            </FlexDiv>
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

export default withRouter(connect(mapStateToProps, { getNotes, addNote })(NewNote));