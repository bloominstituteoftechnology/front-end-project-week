import React from "react";
import {NoteFormWrapper, Form, TitleInput, ContentInput, Btn} from './Styled';

const CreateNewView = props => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     title: "",
  //     textBody: ""
  //   };
  // }

  // inputHandler = e => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  // add = (e, obj) => {
  //   e.preventDefault();
  //   this.props.addNote(e, obj);
  //   this.setState({ title: "", textBody: "" });
  // };

  // render() {
    return (
      <NoteFormWrapper>
        <h2>Create New Note:</h2>
       
        <Form
          // onSubmit={e =>
          //   this.add(e, {
          //     title: this.state.title,
          //     txt: this.state.textBody
          //   })
          // }
        >
          <TitleInput
            name="title"
            type="text"
            value={props.note.title}
            onChange={props.changeHandler}
            placeholder="Note Title"
          />
          <ContentInput
            name="textBody"
            type="text"
            value={props.note.textBody}
            onChange={props.changeHandler}
            placeholder="Note Content"
          />
          <Btn >Save</Btn> 
        
        </Form>
      </NoteFormWrapper>
    );
  }
// }

export default CreateNewView;
