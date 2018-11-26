import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { editNote } from '../Actions/index';
import { NoteBody } from '../Styles/NoteViewStyle';
import { BtnStyle } from '../Styles/AppStyle';
import { FormStyle, TitleInputStyle, ContentInputStyle , FormWrap, BtnWrap } from '../Styles/EditViewStyle';


class EditView extends Component {
    constructor(props) {
        super(props)
    this.state = {
        note: {
            title: "",
            textBody: "",
        }
    }
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
    this.props.editNote(id , this.state.note);
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
                    <BtnWrap>
                        <BtnStyle type='submit'>Save</BtnStyle>
                    </BtnWrap>
                </FormStyle>
            </FormWrap>
            </NoteBody>
        )
    }
}

const mapStateToProps =(state)=> {
    return {

        notes: state.notes,
        path: "Edit View",
    }
}

export default withRouter(connect(mapStateToProps, {editNote})(EditView))