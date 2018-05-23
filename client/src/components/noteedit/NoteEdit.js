import React from 'react';

import Form from '../misc/Form'

// style
import './NoteEdit.css';

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
    console.log(nextProps);
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
      <div className='edit-note-wrapper'>
        <div className='edit-note-wrapper__title-wrapper'>
          <h2 className='title-wrapper__h2'>Edit Note:</h2>
        </div>
        
        {
          this.props.noteList.filter(note => {
            return note.id === this.props.match.params.id;
          })
            .map(note => {
              return (
                <Form
                  key={ note.id }
                  buttonClassName='edit-wrapper__save-newnote button'
                  buttonContent='Update'
                  buttonOnClick={ () => this.props.buttonOnClick(note.id, this.state.title, this.state.content) }
                  content={ this.state.content }
                  formClassName='edit-note-wrapper__form'
                  inputClassName='form__input-title'
                  setInputVal={ this.setInputVal }
                  setTextAreaVal={ this.setInputVal }
                  title={ this.state.title }
                  textareaClassName='form__input-textarea'
                />
              )
            })
        }
      </div>
    )
  }
}
 
export default NoteEdit;