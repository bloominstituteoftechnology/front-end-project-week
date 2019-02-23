import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { editNote, getNote } from '../Actions/index';
import { NoteBody } from '../Styles/NoteViewStyle';
import { BtnStyle } from '../Styles/AppStyle';
import { FormStyle, TitleInputStyle, ContentInputStyle , FormWrap, BtnWrap } from '../Styles/EditViewStyle';



class EditView extends Component {

    state = {
        path: "Edit View",
        title: "",
        note: "",
    }

      
      componentDidMount = () => {
        console.log("EDIT TITLE", this.props.note.title, "NOTE BODY", this.props.note.note)
          this.setState({
              title: this.props.note.title,
              note: this.props.note.note,
          })
    }

submitHandler = (e) => {
       e.preventDefault()
        const id = this.props.match.params.id;
    this.props.editNote(id, {title: this.state.title, note: this.state.note} );
    this.props.history.push('/');
    }


    inputHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
};


    render() {
        return (
            <NoteBody>
            <FormWrap>
                <h2>Edit Note:</h2>
                <FormStyle onSubmit={this.submitHandler}> 
                    <TitleInputStyle  type="text" name="title" placeholder="title" value={this.state.title}  onInput={this.inputHandler} ></TitleInputStyle>
                    <ContentInputStyle  type="text" name="note" placeholder="Note Body" value={this.state.note}  onInput={this.inputHandler}>
                    </ContentInputStyle>
                    <BtnWrap>
                        <BtnStyle type="submit" >Save</BtnStyle>
                    </BtnWrap>
                </FormStyle>
            </FormWrap>
            </NoteBody>
        )
    }
}

const mapStateToProps =(state)=> {
    return {
        note: state.note,
        path: "Edit View",
    }
}

export default withRouter(connect(mapStateToProps, { editNote, getNote })(EditView))