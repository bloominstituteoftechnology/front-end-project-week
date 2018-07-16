import React, { Component } from 'react';
import Sidebar from './Sidebar';
import ViewNote from './ViewNote';
// import { Link } from 'react-router-dom';

class NoteList extends Component {
    constructor(props) {
    super(props)
        this.state = {
        title: '',
        body: '',
        }
    }

    render() {
    return (
        <div className="Notes">
        {/* <Sidebar /> */}
        {/* <Link to='/editNote'>Edit</Link> */}
        <ViewNote 
            key={this.props.note.id}
            title={this.state.title}
            body={this.state.body}
        />
        {/* <Route exact path='/viewNote/:id' component={ViewNote} /> */}
        </div>
    )
}
}


export default NoteList;