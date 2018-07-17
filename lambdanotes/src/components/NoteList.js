import React from 'react';
import Sidebar from './Sidebar';
import ViewNote from './ViewNote';
// import { Link } from 'react-router-dom';

const NoteList = props => {
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


export default NoteList;