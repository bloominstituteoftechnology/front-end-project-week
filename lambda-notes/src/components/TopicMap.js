import React from 'react';

export default class TopicMap extends React.Component {
    state = {
        title: 'Title',
        notes: [],
        newNote: {'title': '', 'textBody': '', 'tags': []},
        topicNotes: [{'title': 'spaggle', 'textBody': '', 'tags': []}]

    }

    inputHandler = (e) => {
        e.target.name === 'title-input' ?
        this.setState({title: e.target.value}) :
        this.setState({newNote: {...this.state.newNote, [e.target.name]: e.target.value}})
      }

      saveNote = () => {
        let tN = [...this.state.topicNotes];

        this.setState({topicNotes: [...this.state.topicNotes, this.state.newNote], newNote: {'title': '', 'textBody': '', 'tags': []} });
        
      }


    render(){
        return (
            <div className="topic-page">
                
                <input name="title-input" 
                       type="text" 
                       id="title-input" 
                       value={this.state.title}
                       onChange={this.inputHandler} />

                <div className="note-map">
                { this.state.topicNotes.map(note => 
                (
                
                <div className="topicNote">{note.title}</div>
                )
                )
                }
                </div>
                <input name="title" 
                       type="text" 
                       id="title-input" 
                       value={this.state.newNote.title}
                       onChange={this.inputHandler} />
                <textarea name="textBody" 
                          id="textarea2"
                          onChange={this.inputHandler}
                          value={this.state.newNote.textBody}
                          placeholder="New note..."> </textarea>
                
                <div className='button' 
                     onClick={this.saveNote}>Save</div>
            
            </div>
        )
    }
}