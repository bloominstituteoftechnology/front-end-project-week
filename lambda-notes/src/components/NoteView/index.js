import React from 'react' 
import { H1 } from '../StyledComponents';

class NoteView extends React.Component{
    state = {
        title: 'Note Title',
        content: 'Note Content',
        id: null
    }

    componentDidMount() {
        console.log(this.props)
        const id = this.props.match.params.id;
        const notes = this.props.notes[id]
        console.log(notes)
        this.setState({
            title: notes.title,
            content: notes.content,
            id: notes.id
        })
      }

    render() {
        return (
            <div className="appView">
                <div className="NoteView">
                    <H1>{this.state.title}</H1>
                    <p>{this.state.content}</p>
                </div>
            </div>
        )
    }
}

export default NoteView