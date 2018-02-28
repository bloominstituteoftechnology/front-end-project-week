import React from 'react';
import { Link } from 'react-router-dom';

export default class AddNote extends React.Component {

    state = {
        name: '',
        data: '',
    };


    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    };

    handleSubmit = () => {
        const nextId = this.getNextId();
        const { name, data } = this.state;
        this.props.addNote({ name, data });
        this.setState({ name: '', data: '' });
    };
    render() {
        const { notes } = this.state;


        return (
            <form onSubmit={props.submitNote}>
                <input type="text" name="note" onChange={props.handleInput} placeholder="New Note" value={props.name} />
                <input type="text" name="data" onChange={props.handleInput} placeholder="Note Text" value=
                    {props.data} />
                <button type="submit" onSubmit={props.handleSubmit}>New Note</button>
            </form>
        )
    }
}
