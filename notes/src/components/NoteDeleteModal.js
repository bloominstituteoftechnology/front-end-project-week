import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const AlertDiv = styled.div`
`;



class NoteDeleteModal extends Component {
   state = {

   };

    componentDidMount() {

        console.log(this.props.match.params);
        axios
      .delete(`https://killer-notes.herokuapp.com/note/delete/${this.props.match.params.id}`)
        .then(res => {
        
          this.setState({
            title: this.state.title,
            textBody: this.state.textBody
          });
        })
        .catch(err => {
          console.error(`Error: ${err}`)
        })
    }

    render() { 
        return (  
        <h1>alert(
            <AlertDiv>
                <h4>Are you sure you want to delete this note?</h4>
                <DeleteButton>Delete</DeleteButton>
                <NoButton>No</NoButton>
            </AlertDiv>
        )
        </h1>
        );
    }
}
 
export default NoteDeleteModal;