import React, { Component } from 'react';
import { addFriend } from '../Actions';
import { connect } from 'react-redux';

class CreateFriendForm extends Component {
    state = {
        name: '',
        age: '',
        email: ''
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleAdd = () => {
        this.props.addFriend(this.state);
        this.setState({
            name: '',
            age: '',
            email: ''
        })
    }

    render() {
        return (
            <div>
                <input placeholder='Name' value={this.state.name} onChange={this.handleChange} name='name' />
                <input placeholder='Age' value={this.state.age} onChange={this.handleChange} name='age' />
                <input placeholder='Email' value={this.state.email} onChange={this.handleChange} name='email' />
                <button onClick={this.handleAdd}>Add Friend</button>
            </div>
        )
    }
}

export default connect(null, { addFriend })(CreateFriendForm);