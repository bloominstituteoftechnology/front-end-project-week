import React from 'react';
import axios from 'axios';
import { LeftBar, StyledLink, ContainCards, NotesH2, CardList, TitleH1 } from "../Styles";


class CreateNoteView extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        title: this.props.notes.title,
        text: this.props.notes.textBody,
        _id: this.props.notes._id
      };
    }
  
    handleInputChange = event => {
      event.preventDefault();
      this.setState({ [event.target.name]: event.target.value });
    };
  
    handleSubmit = event => {
      event.preventDefault();
      const newNote = {
        tags: [],
        title: this.state.title,
        textBody: this.state.text,
        _id: this.state._id
      };
      axios.post("https://fe-notes.herokuapp.com/note/create", newNote)
        .then(response => {
          console.log(response.data);
          newNote._id = response.data.success;
          this.props.addNewNotes(newNote);
        })
        .catch(error => {
          console.error(error);
        });
      this.props.history.push("/");
    };
  
     render() {
        return(
            <div>
              <LeftBar>
          <TitleH1>Lambda Notes</TitleH1>
          <StyledLink to={"/"}>View Your Notes</StyledLink>
          <StyledLink to={"/note/create"}>Add New Note</StyledLink>
        </LeftBar>
                <form onSubmit={this.handleSubmit}>
                    <h1>New Note</h1>
                    <input 
                        type="text"
                        name="title"
                        placeholder="title"
                        value={this.props.value}
                        onChange={this.handleInputChange}
                    />
                    <input 
                        type="text"
                        name="text"
                        placeholder="text body"
                        value={this.props.value}
                        onChange={this.handleInputChange}
                    />
                    <button type="submit">Add Note</button>
                </form>
            </div>
        );
    }
}
 export default CreateNoteView; 