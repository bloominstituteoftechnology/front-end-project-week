import React, {Component} from 'react';
import noteData from '../data';
class Addnote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: [],
            note: {
                title: '',
                content: ''
            }
        }
    }

    addNote = e => {

        const note = {...this.state.note};

        e.preventDefault();
        const notes = this.state.notes.slice();
        
        this.setState({notes: noteData, note:{title: '', content: ''}});
      }


      handleInputChange = e => {
          this.setState({ [e.target.name]: e.target.value})
      }

      handleTitleChange = e => {
          this.setState({note: Object.assign({}, this.state.note, {title: e.target.value})})
      }

      handleContentChange = e => {
          this.setState({note: Object.assign({}, this.state.note, {content: e.target.value})})
      }

      render() {
          return (
                <div>
                    <form onSubmit={this.note}>
                        <input
                        onChange={this.handleTitleChange}
                        placeholder='title'
                        value={this.state.note.title}
                        name='title'
                        />

                        <input 
                        onChange={this.handleContentChange}
                        placeholder='content'
                        value={this.state.note.content}
                        name='content'
                        />
                        <button type='submit'>Add Note</button>

                    </form>
                    </div>
          )
        }

}

export default Addnote;