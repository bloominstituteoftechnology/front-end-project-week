import React from 'react';
import './createnote.css';

class EditNote extends React.Component {
  state = {
    title: '',
    content: '',
    id: '',
  };

  componentDidMount() {
    this.setState({...this.props.currentNote});
  };

  render() {
    return (
      <div>
        <form className="note__form" onSubmit={this.modifyNote}>
          <input name="title" className="note__title" type="text" placeholder="Note Title" onChange={this.handleChange} value={this.state.title}/>
          <textarea name="content" className="note__content" cols="60" rows="10" type="text" placeholder="Note Content" onChange={this.handleChange} value={this.state.content}></textarea>
          <button className="note__button" type="submit">Save</button>
        </form>
      </div>
    );
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  };

  modifyNote = (event) => {
    event.preventDefault();
    const newNote = Object.assign({}, this.state);
    this.setState({
      title: '',
      content: '',
      id: '',
    });
    this.props.submitModifiedNote(newNote);
    this.props.changeSwitch(`${newNote.title}`, 'noteView');
    
  };
}

export default EditNote;