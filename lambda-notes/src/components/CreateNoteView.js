import React from 'react';
import axios from 'axios';
import { LeftBar, StyledLink, ContainCards, NotesH2, CardList, TitleH1, BodyInput, TitleInput } from "../Styles";
import '../App.css'


class CreateNoteView extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        title: this.props.notes.title,
        text: this.props.notes.content,
        id: this.props.notes.id
      };
    }
  
    handleInputChange = event => {
      event.preventDefault();
      this.setState({ [event.target.name]: event.target.value });
    };
  
    handleSubmit = event => {
      event.preventDefault();
      const newNote = {
       
        title: this.state.title,
        content: this.state.text,
        id: this.state.id
      };
      console.log("this is this.props.notes", this.props.notes)
      console.log("this is newNote", newNote)
      axios.post("http://localhost:3400/api/notes", newNote)
        .then(response => {
          console.log("this is my response", response);
          console.log("this is my response.data", response.data);
          console.log("this is my response.data.success", response.data.success);
          newNote.id = response.data.id;
          this.props.addNewNotes(newNote);
        })
        .catch(error => {
          console.error(error);
          
          console.log("this is my error",error);
        });
      this.props.history.push("/");
    };
  
     render() {
        return(
            <div>
              <LeftBar>
          <TitleH1>Lambda Notes</TitleH1>
          <StyledLink to={"/"}>View Your Notes</StyledLink>
          <StyledLink to={"/api/notes"}>+ Create New Note</StyledLink>
        </LeftBar>
          <div className ='formHolder'>
                <form className ='form' onSubmit={this.handleSubmit}>
                    <h1>New Note</h1>
                    <TitleInput 
                        type="text"
                        name="title"
                        placeholder="title"
                        value={this.props.value}
                        onChange={this.handleInputChange}
                    />
                    <BodyInput 
                        type="text"
                        name="text"
                        placeholder="content"
                        value={this.props.value}
                        onChange={this.handleInputChange}
                    />
                    <button className='saveBtn'  type="submit">Save</button>
                </form>
                </div>
            </div>
        );
    }
}
 export default CreateNoteView; 