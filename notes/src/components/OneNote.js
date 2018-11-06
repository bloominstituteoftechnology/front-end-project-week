import React, {Component} from 'react';
import axios from 'axios';


class OneNote extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            notes: this.props.notes
         }
    }
    componentDidMount = () => {
      this.fetchNote(this.props.match.params.id);
      console.log(this.props.match.params.id);
    }
    componentWillReceiveProps(newProps) {
        if (this.props.match.params.id !== newProps.match.params.id) {
            this.fetchNote(newProps.match.params.id)
        }
    }
    fetchNote = id => {
        let oneNote = {
            tags: this.state.tags,
            title: this.state.title,
            textBody: this.state.textBody
        }
        axios.get(`https://fe-notes.herokuapp.com/note/get/${id}`, oneNote)
        .then(response => {
            this.setState({ notes: response.data })
            console.log(response.data)
        })
    }
    
    render() { 
        return (
            <div>   
                <button onClick={this.deleteNote}>Delete Note</button>
            </div> );
    }
}

 
export default OneNote;