import React, { Component } from "react";
import { connect } from "react-redux";

class EditPage extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            textBody: '',
        }
    }

    render() {
        return (
            <div className='edit'>
                <form className='edit-form' onSubmit={this.editNote}>Edit Note
                    <input className='edit-input' name='title' value={this.state.title} onChange={this.changeHandler} type='text' placeholder='Title' required></input>
                    <input className='edit-input' name='textBody' value={this.state.textBody} onChange={this.changeHandler} type='text' placeholder='Content' required></input>
                    <input className='edit-submit' type='submit' value='submit'/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {};

export default connect(mapStateToProps)(EditPage);