import React from 'react';

//  console.log(props);
//   const noteId = props.match.params.id;
//   console.log(noteId);
//   const singleNote = props.notes[noteId];
//   console.log(singleNote);


class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedNote: '',
      notes: []
    }
  }


  // componentDidMount(){
  //   console.log("inside CDM")
  // }
  // props.bootUp()
  // console.log(props.notes)
  // const found = props.notes[props.match.params.id]
  //   console.log(found);

  render() {
    console.log("Render Invoked");
    const thisId = this.props.match.params.id.slice(1);
    console.log(thisId);
    const thisNote = this.props.notes[thisId]
    console.log(thisNote);
  return (
    console.log(this.props),
    console.log(thisId),
    <div>
      <p>Inside Note</p>
      <h1>{thisNote.title}</h1>
      <p>{thisNote.textBody}</p>
    </div>
   )
  }
}

export default Note;