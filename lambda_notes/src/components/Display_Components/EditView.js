import React, { Component } from 'react'
import axios from 'axios';
import { NoteBody } from '../Styles/NoteViewStyle';
import { BtnStyle } from '../Styles/AppStyle';
import { FormStyle, TitleInputStyle, ContentInputStyle ,  FormWrap } from '../Styles/EditViewStyle';


export default class EditView extends Component {
    constructor(props) {
        super(props)
    this.state = {
        note: {
            title: "",
            textBody: "",
        }
    }
}



  
 editNote = (id , note) => {
    axios.put(`https://fe-notes.herokuapp.com/note/edit/${id}`, note)
    .then( res => {
        this.setState({ note: note})
    })
    .catch( err => {
        throw new Error(err);
    })
}

inputHandler = (e) => {
    e.preventDefault();
    this.setState({
        note: {
          ...this.state.note,
          [e.target.name]: e.target.value,
        }
        
    })
}

submitHandler = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;
    this.editNote(id , this.state.note);
}   


    render() {
        return (
            <NoteBody>
            <FormWrap>
                <h2>Edit Note:</h2>
                <FormStyle onSubmit={this.submitHandler}> 
                    <TitleInputStyle  type="text" name="title" placeholder="Note Title" onInput={this.inputHandler} ></TitleInputStyle>
                    <ContentInputStyle  type="text" name="textBody" placeholder="Note Content"  onInput={this.inputHandler}>
                    </ContentInputStyle>
                    <BtnStyle type='submit'>Save</BtnStyle>
                </FormStyle>
            </FormWrap>
            </NoteBody>
        )
    }
}
