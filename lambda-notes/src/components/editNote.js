import React, { Component } from 'react';

class EditNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: '',

        }
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {

    let denoted = this.props.notes.find(note => note.id === parseInt(this.props.match.params.id, 10));
    console.log(this.props);
    if(this.props.notes.length > 0) {
        return (
            <div className="add-form-wrap" >
                <h3>Edit Note:</h3>
                <form className="add-form" >
                    <input className="edit-title-input" name="title" onChange={this.props.handleInputChange} value={this.props.inputTitle} /> <br/>
                    <textarea className="edit-text-input" name="text" onChange={this.props.handleInputChange} value={denoted.inputText} />
                    <div className="save-btn" >Save</div>
                </form>
            </div>
        )
    } else return (<div>I've got a worse feeling about this...</div>)
}
}

export default EditNote;