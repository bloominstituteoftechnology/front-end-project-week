import React from 'react';
import axios from 'axios';

class EditNote extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title : '',
            textbody : '',
            isMounted:false
        }
    }

    handleInputChange = (event) => {
        this.setState({ [event.target.name] : event.target.value });
    }

    componentDidMount() {
        axios
            .get(`https://fe-notes.herokuapp.com/note/get/${this.props.match.params._id}`)
            .then(response => 
                        this.setState({ title : response.data.title,
                        textbody : response.data.textBody}))
            .catch(error => console.log(error));
    }

    editNote = () => {
        const editedNote = {
            title : this.state.title,
            textBody : this.state.textbody
        }
        this.setState({title : '', textbody : ''});
        axios
            .put(`https://fe-notes.herokuapp.com/note/get/put/${this.props.match.params.noteId}`, editedNote)
            .then(response => this.props.history.push('/notes'))
            .catch(error => console.log(error));
    }
    
    render() {
        return (
            <div className = "create-note-main-div">
                <h3>Editing....</h3>

                <div className = "form">
                    
                    <input name = 'title'
                           type = 'text' 
                           placeholder = {this.state.title}
                           value = {this.state.title}
                           onChange={this.handleInputChange}
                    />

                    <textarea name = 'textbody' 
                           type = 'text'
                           placeholder = {this.state.textbody}
                           value = {this.state.textbody} 
                           onChange = {this.handleInputChange}
                    />

                    <button onClick = {this.editNote}> Save </button>
                </div>
            </div>
        )
    }
}

export default EditNote;