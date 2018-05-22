import React from 'react';

import Form from '../misc/Form'

class NoteEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
    };
  }

  // setInputVal
  setInputVal = e => {
    this.setState({ [e.target.name]: e.target.value });
  }
  
  // getDerivedStateFromProps
  static getDerivedStateFromProps(nextProps, prevState) {
    const currentNote = nextProps.noteList[nextProps.match.params.id];

    if (currentNote) {
      return {
        title: currentNote.title,
        content: currentNote.content,
      };
    }

    return {};
  }
  
  render() {
    return (
      <div>
        <div>
          <h2>Edit Note:</h2>
        </div>
        
        {
          this.props.noteList.filter(note => {
            return note.id === this.props.match.params.id;
          })
            .map(note => {
              return (
                <Form
                  key={ note.id }
                  buttonContent='Update'
                  buttonOnClick={ () => this.props.buttonOnClick(note.id, this.state.title, this.state.content) }
                  content={ this.state.content }
                  setInputVal={ this.setInputVal }
                  setTextAreaVal={ this.setInputVal }
                  title={ this.state.title }
                />
              )
            })
        }
      </div>
    )
  }
}
 
export default NoteEdit;