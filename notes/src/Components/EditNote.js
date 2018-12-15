import React, { Component } from 'react';
import axios from 'axios';

class EditNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            contents: '',
            id: null
        };
    }

/* componentDidMount() {
    const id = this.props.match.params.id;
    this.setState({ id, notes: this.props.notes });

    axios
    .put(`http://localhost:3333/api/notes/${id}`)
    .then(response => {
        this.setState({note: response.data})
        //this.props.history.push('/');
    })

  }
 */

handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value});
};

editNote = (e, id) => {
    e.preventDefault();

    axios
    .put(`http://localhost:3333/api/notes/${id}`)

}

render() {
    return (
        <div>
            <form>
                <h1>Edit Note:</h1>
                <input 
                    onChange={this.handleInputChange}
                    placeholder='title'
                    value={this.state.title}
                    name='title'
                />
                <input 
                    onChange={this.handleInputChange}
                    placeholder='contents'
                    value={this.state.contents}
                    name='contents'
                />
                <button onClick={this.editNote}>Save</button>
            </form>
        </div>
        );
    }
}

export default EditNote;