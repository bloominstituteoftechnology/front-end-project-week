import React from 'react';

import '../styles/Styles.css';


class AddNote extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: '',
      title: '',
      textBody: ''
    }
  }


  componentDidMount(){
    if(this.props.id){
      console.log('add : ', this.props);
      this.setState({
        id: this.props.id,
        title: this.props.title,
        textBody: this.props.textBody
      });
    }
  }

  addNote = event => {
    event.preventDefault();

    const newNote = {
      title: this.state.title,
      textBody: this.state.textBody,
    }

    this.props.postNote(newNote);

    this.setState({
      title: '',
      textBody: ''
    });

    window.location.reload();

  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className='add-note-form'>
        <h1>Create New Note:</h1>
        <form onSubmit={this.addNote}>
          <input onChange={this.handleInputChange} type="text" name="title" className="title" placeholder='Note Title'/>
          <br/>
          <textarea onChange={this.handleInputChange} className='textBody' name='textBody' placeholder="Note Content">
          </textarea>
          <br/>
          <button type="submit" className='button'>Save</button>
        </form>
      </div>
    );
  }
}

export default AddNote;