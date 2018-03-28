import React, { Component } from 'react';

class EditNote extends Component {
    state = {
        title: this.props.location.state.default.title,
        text: this.props.location.state.default.text,
        tags: [],
        showTag: false,
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.edit(this.state, this.props.match.params.id);
        this.setState({ title: '', text: ''})
        this.props.history.push('/');
    }

    handleReveal = (e) => {
        e.preventDefault();
        this.setState({ showTag: !this.state.showTag })
        if (this.state.showTag) console.log('HI');
    }

    render() {
        const display = this.state.showTag ? {} : { visibility: "hidden" };
        return (
            <div className="EditNote">
                <h4 className="Title">Edit Note:</h4>
                <form className="Form">
                    <input className="Inputtext" type="text" name="title" value={this.state.title} onChange={this.handleChange}></input>
                    <textarea className="Inputfield" type="textarea" name="text" value={this.state.text} onChange={this.handleChange}></textarea>
                    <div className="AddNote__Buttons">
                        <button className="Button" onClick={this.handleSubmit}>Update</button>
                        <button className="AddTag" onClick={this.handleReveal}>Add Tag</button>
                        <div className="AddTag__Input" style={display}>
                            <input type="text" name="TagName" placeholder="Name"></input>
                            <input type="text" name="TagColor" placeholder="Color"></input>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default EditNote;