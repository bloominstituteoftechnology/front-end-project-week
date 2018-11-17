import React from 'react';

import axios from 'axios';

import { NavLink } from 'react-router-dom';

class NoteProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            note: [],
        }
    }

    componentDidMount() {
        axios
            .get(`https://fe-notes.herokuapp.com/note/get/${this.props.match.params.id}`)
            .then(response => {
                console.log(response);
                this.setState({
                    note: response.data,
                })
            })
            .catch(error => {
                console.log(error);
            })
        // console.log(this.state.note);
    }

    render() {
        return (
            <div className='note-view'>
                <div>
                    <div>
                        <NavLink to='/update-note' onClick={this.props.pageReload}>edit</NavLink>
                    </div>
                </div>
                <div className='notes-sidebar'>
                    <h1 className='title'>Lambda Notes</h1>
                    <NavLink to='/' className='navlink' exact activeClassName='navlink-selected'><button onClick={this.props.pageReload}>View Your Notes</button></NavLink>
                    <NavLink to='/create-new-note' className='navlink' exact activeClassName='navlink-selected'><button onClick={this.props.pageReload}>+ Create New Note</button></NavLink>
                </div>
                <div key={this.props.match.params.id} id={this.props.match.params.id} className='specific-note'>
                    <h4 className='specific-note-title'>{this.state.note.title}</h4>
                    <p className='specific-note-textbody'>{this.state.note.textBody}</p>
                </div>
            </div>
        )
    }
}
export default NoteProfile;