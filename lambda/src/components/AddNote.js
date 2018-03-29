import React, { Component } from 'react';

class AddNote extends Component {
    state = {
        name: '',
        title: '',
        text: '',
        // tags: [],
        // showTag: false,
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ name: '', text: ''})
        // this.props.add(this.state);
        // this.setState({ title: '', text: ''})
        this.props.history.push('/');
    }

    // handleReveal = (e) => {
    //     e.preventDefault();
    //     this.setState({ showTag: !this.state.showTag })
    //     if (this.state.showTag);
    // }

    render() {
        const display = this.state.showTag ? {} : { visibility: "hidden" };
        return (
            <div className="AddNote">
                <h4 className="Title">Create New Note:</h4>
                <form className="Form">
                    <input className="Inputtext" type="text" name="title" placeholder="Note Title" onChange={this.handleChange} value={this.state.title}></input>
                    <textarea className="Inputfield" type="textarea" name="text" placeholder="Note Content" onChange={this.handleChange} value={this.state.text}></textarea>
                    <div className="AddNote__Buttons">
                        <button className="Button" onClick={this.handleSubmit}>Save</button>
                        {/* <button className="AddTag" onClick={this.handleReveal}>Add Tag</button> */}
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

export default AddNote;