import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class LambdaEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            notes: {
                id: null,
                title: '',
                content: ''
            }
        }
    }

    handleTitle = e => {
        this.setState({
            notes: {
                id: this.state.notes.id,
                title: e.target.value,
                content: this.state.notes.content
            }
        })
    }

    handleContent = e => {
        this.setState({
            notes: {
                id: this.state.notes.id,
                title: this.state.notes.title,
                content: e.target.value
            }
        })
    }

    handleEditNote = () => {
        const id = this.props.match.params.id
        const notes = {
            title: this.state.notes.title,
            content: this.state.notes.content
        }
        axios.put(`http://localhost:9000/${id}`, notes).then(res => {
            console.log('before', res)


            this.props.history.push('/');
        }).catch(err => console.log(err))
        this.setState({ id: null, notes: { id: null, title: '', content: '' } })
    }


    render() {
        return (
            <div>
                <h2>Edit Note:</h2>
                <form>
                    <input style={{ width: '500px', height: '30px', marginBottom: '15px' }} type="text" name="title" placeholder="Note Title" value={this.state.notes.title} onChange={this.handleTitle} /><br />
                    <textarea style={{ width: '600px', height: '350px' }} type="text" name="content" placeholder="Note Content" value={this.state.notes.content} onChange={this.handleContent} /><br />
                    <Link to="/" style={{ textDecoration: 'none', color: 'black' }}><button onClick={this.handleEditNote}>Update</button></Link>
                </form>
            </div>
        )
    }
}

export default LambdaEdit;