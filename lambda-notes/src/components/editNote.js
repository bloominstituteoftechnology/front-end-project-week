import React, { Component } from 'react';

class EditNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.notes.find(note => note.id === parseInt(props.match.params.id, 10)).title,
            text: props.notes.find(note => note.id === parseInt(props.match.params.id, 10)).text,
            id: props.notes.find(note => note.id === parseInt(props.match.params.id, 10)).id
        }
    }
    

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {

    // let denoted = this.props.notes.find(note => note.id === parseInt(this.props.match.params.id, 10));
    // onClick={this.props.editNoteSubmit(this.state.id, this.state.title, this.state.text)}

    console.log(this.state.id);
    if(this.props.notes.length > 0) {
        return (
            <div className="add-form-wrap" >
                <h3>Edit Note:</h3>
                <form className="add-form" >
                    <input className="edit-title-input" name="title" onChange={this.handleInputChange} value={this.state.title} /> <br/>
                    <textarea className="edit-text-input" name="text" onChange={this.handleInputChange} value={this.state.text} />
                    <div className="save-btn"  onClick={(event) =>{event.preventDefault(); this.props.editNoteSubmit(this.state.id, this.state.title, this.state.text)}}  >Save</div>
                </form> {/* */}
            </div>
        )  
    } else return (<div>I've got a worse feeling about this...</div>)
}
}

export default EditNote;