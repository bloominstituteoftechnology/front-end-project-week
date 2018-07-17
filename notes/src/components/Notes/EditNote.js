import React, { Component } from 'react';
class EditNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            id: 0
        }
    }

    handleChange = (e) => {
        return this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div>
                <h2>Edit Note:</h2>
                <form>
                    <input
                        className='title-bar'
                        type='text'
                        placeholder="Add a title..."
                        value={this.state.title}
                        onChange={this.handleChange}
                        name='title'
                    />
                    <div>
                        <textarea
                            className='content-bar'
                            type='text'
                            placeholder="Add a note..."
                            value={this.state.content}
                            onChange={this.handleChange}
                            name='content'
                        />
                    </div>
                    <div onClick={this.onSubmit} className='create-btn'>Save</div>
                </form>
            </div>
        )
    }
}
export default EditNote;