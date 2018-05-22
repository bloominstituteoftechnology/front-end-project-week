import React, { Component } from 'react';
import Notes from './Note';
import './listView.css';


class ListView extends Component {
    render() {
        return (
            <div className="noteArea">
                {/* ListView - list of all notes */}
                <h5>Your Notes</h5>
                <Notes /> 
            </div>
        );
    }
}

export default ListView;