import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class LambdaView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            notes: this.props.notes
        };
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.setState({ id: Number(id), notes: this.props.note });
    }

    filterNotes = note => {
        if (note.id === this.state.id) {
            return (

                <div key={note.id}>
                    <Link to={`/edit/${note.id}`} style={{ color: 'black', textDecoration: 'underline', marginRight: '10px' }}>Edit</Link>
                    <buttonDelete onClick={this.props.toggleDelete}>Delete</buttonDelete>
                    <h1>{note.title}</h1>
                    <p>{note.body}</p>
                </div>
            )
        }
    }

    render() {
        return (
            <div>{this.props.note.map(this.filterNotes)}</div>
        )
    }
}



export default LambdaView;