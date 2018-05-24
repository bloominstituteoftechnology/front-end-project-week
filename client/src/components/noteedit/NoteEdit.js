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
    console.log(e.target.name)
    this.setState({ [e.target.name]: e.target.value });
  }
  
  // getDerivedStateFromProps
  static getDerivedStateFromProps(nextProps, prevState) {
    for (let note of nextProps.noteList) {
      if (nextProps.match.params.id === note.id) {
        const title = prevState.title ? prevState.title : note.title;
        const content = prevState.content ? prevState.content : note.content;
        return {
          title,
          content,
        };
      }
    }
    return null;
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
              const { id } = note;
              const { title, content } = this.state;
              const { setInputVal, props } = this;
              return (
                <Form
                  key={ id }
                  buttonClassName='edit-wrapper__save-newnote button'
                  buttonContent='Update'
                  buttonOnClick={ e => props.buttonOnClick(e, props, id, title, content) }
                  content={ content }
                  formClassName='edit-note-wrapper__form'
                  inputClassName='form__input-title'
                  setInputVal={ setInputVal }
                  setTextAreaVal={ setInputVal }
                  title={ title }
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