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
        note: {
            title: "",
            note: "",
        }
    }

    componentWillMount(){
        const id = this.props.match.params.id;
        this.props.getNote(id);
     }

     componentDidUpdate(){
        
     }

   

submitHandler = (e) => {
       e.preventDefault()
        const id = this.props.match.params.id;
        this.props.editNote(id , this.state.note);
    } 

inputHandler = (e) => {
    e.preventDefault();
    this.setState({
        note: {
          ...this.state.note,
          path: this.state.path,
          [e.target.name]: e.target.value,
        }
        
    })
}



  


    render() {
        return (
            <NoteBody>
            <FormWrap>
                <h2>Edit Note:</h2>
                <FormStyle onSubmit={this.submitHandler}> 
                    <TitleInputStyle  type="text" name="title" placeholder={this.props.note.title}  onInput={this.inputHandler} ></TitleInputStyle>
                    <ContentInputStyle  type="text" name="note" placeholder={this.props.note.note}  onInput={this.inputHandler}>
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