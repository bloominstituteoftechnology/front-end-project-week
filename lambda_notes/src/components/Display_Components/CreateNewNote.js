import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { newNote } from '../Actions/index';
import { FormStyle, ContentInputStyle, TitleInputStyle } from '../Styles/EditViewStyle';
import { BtnStyle } from '../Styles/AppStyle';
import { FormFormat, BtnWrap } from '../Styles/CreateNoteStyle';


class CreateNewNote extends Component {

 state = {
     
        title: "",
        note: "",
    }

inputHandler = (e) => {
     this.setState({[e.target.name]: e.target.value})
 }

 submitHandler = (e) => {
    e.preventDefault();
    this.props.newNote(this.state);
 }



    render() {
        console.log(this.props)
        return (
            <FormFormat>
                <h2>Create New Note:</h2>
                <FormStyle onSubmit={this.submitHandler}>
                    <TitleInputStyle type='text' name='title' placeholder="Note Title" onInput={this.inputHandler}></TitleInputStyle>
                    <ContentInputStyle type='textBox' name='note' placeholder="Note Content" onInput={this.inputHandler}></ContentInputStyle>
                    <BtnWrap>
                      <BtnStyle type="submit">Add Note</BtnStyle>
                    </BtnWrap>
                </FormStyle>
            </FormFormat>
        )
    }
}

const mapStateToProps =(state)=> {
    return {
        notes: state.notes,
        path: state.path,
    }
}


export default withRouter(connect(mapStateToProps, {newNote})(CreateNewNote)) ;