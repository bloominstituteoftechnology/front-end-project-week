// needs to accept a title field and a content field
import React from 'react';

class NewNote extends React.Component {
  state = {
    title: '',
    content: '',
    myList: []
  }
  addNote = (e) => {
    e.preventDefault()
    const myList = [];
    const title = this.title.value;
    const content = this.content.value;
    this.setState({
      title: this.title.value,
      content: this.content.value
    })
    myList.push({title, content});
    this.title.value = ''
    this.content.value = ''
    console.log(myList);
  }

  render() {
    return (
      <div>
        <h1>Create New Note</h1>
        <input
          type='text'
          placeholder='Note Title'
          ref={(title) => this.title = title} // what this does is allows us to grab the value of the input without adding it to our state
          />
        <input
          type='text'
          placeholder='Note Content'
          ref={(content) => this.content = content}
          />
        <button onClick={this.addNote}>Save</button>
      </div>
    )
  }
}

export default NewNote;