import React, {Component} from "react";



import { NoteCard, NoteCardList, NoteCardTitle, NoteCardText } from "./Styled";
import axios from 'axios'
import { Link } from "react-router-dom";

class ListView extends Component {
  constructor() {
    super()
    this.state={
      notes: []
    }
  }
  
  componentDidMount() {
    axios.get("https://fe-notes.herokuapp.com/note/get/all")
      .then(res => {
        this.setState({ notes: res.data });
      })
      .catch(err => console.log(err, "failed to get api"));
  }

render() {
  return (
    <div className="Notes">
      <h2>Your Notes:</h2>

      <NoteCardList>
        {this.state.notes.map(note=> {
          console.log(note, 'note in notecard list')
          return (
            
            <Link to={`/note/${note._id}`} key={note._id}>
            <NoteCard  >

              <NoteCardTitle>{note.title}</NoteCardTitle>
              <NoteCardText>{note.textBody}</NoteCardText>
            </NoteCard>
            </Link>
           
          
          );
        })}
      </NoteCardList>
    </div>
  );
};
}

export default ListView;
