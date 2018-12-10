import React from 'react';

class CreateNewNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            textBody: ''
          };
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };
    
      submitHandler = event => {
        event.preventDefault();
        this.props.addNote(this.state);
        this.props.history.push("/");
      }

    render() {
        return(
            <form onSubmit={this.submitHandler}>
            <input
                onChange={this.handleInputChange}
                placeholder="Add a title for your note..."
                value={this.state.title}
                name="title"
            />
            <input
                onChange={this.handleInputChange}
                placeholder="Add your note's text..."
                value={this.state.textBody}
                name="textBody"
            />
            <button type="submit">Add to the village</button>
            </form>
        )
    }
}

export default CreateNewNote;