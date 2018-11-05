
import React from 'react';


class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            title:"",
            textBody:""
        }
    }
    
    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    
    createNote = event => {
        this.props.addNote(event, this.state);
        this.setState({ title: "", textBody: "" })
        this.props.history.push("/")
    }
    
    render() {
      
        return (
            <div className="container">
        <div className="notes-header">
          <h3>Create New Note:</h3>
        </div>
        <form onSubmit={this.createNote}>
          <input
            className="form-note-title"
            name="title"
            value={this.state.title}
            onChange={this.changeHandler}
            type="text"
            placeholder={this.state.title}
            />
          <textarea
            className="form-note-content"
            name="textBody"
            value={this.state.textBody}
            onChange={this.changeHandler}
            type="text"
            placeholder={this.state.textBody}
            />

          <button className="save-button">Save</button>
        </form>
      </div>
    );
}
}



  export default Form;