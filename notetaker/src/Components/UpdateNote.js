import React, { Component } from 'react';
import { updateFriend } from '../Actions';
import { connect } from 'react-redux';

class UpdateFriendForm extends Component {
    state = {
        name: '',
        age: '',
        email: '',
        id: '',
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    handleUpdate = () => {
        const { name, age, email, id } = this.state;
        this.props.updateFriend(id, {name, age, email});
        this.setState({
            name: '',
            age: '',
            email: '',
            id: '',
        })
    }

    render() {
        return (
            <div>
                <input placeholder='Name' value={this.state.name} onChange={this.handleChange} name='name' />
                <input placeholder='Age' value={this.state.age} onChange={this.handleChange} name='age' />
                <input placeholder='Email' value={this.state.email} onChange={this.handleChange} name='email' />
                <input placeholder='ID' value={this.state.id} onChange={this.handleChange} name='id' />
                <button onClick={this.handleUpdate}>Update Friend</button>
            </div>
        )
    }
}

export default connect(null, { updateFriend })(UpdateFriendForm);