import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LambdaEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            notes: []
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        let note = this.props.notes.filter(note => note.id === Number(id));
        this.props.handleSelectNote(note[0]);
    }

    handleUpdate = () => { this.props.handleEditNote(this.props.match.params.id) }

    render() {
        return (
            <div>
                <h2>Edit Note:</h2>
                <form>
                    <input style={{ width: '500px', height: '30px', marginBottom: '15px' }} type="text" name="title" placeholder="Note Title" value={this.props.selected.title} onChange={this.props.handleTitle} /><br />
                    <textarea style={{ width: '600px', height: '350px' }} type="text" name="body" placeholder="Note Content" value={this.props.selected.body} onChange={this.props.handleBody}/><br />
                    <Link to="/" style={{textDecoration: 'none' , color: 'black'}}><button onClick={this.handleUpdate}>Update</button></Link>
                </form>
            </div>
        )
    }
}

export default LambdaEdit;