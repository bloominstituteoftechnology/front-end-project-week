import React, { Component } from 'react';
import Notes from './Note';

class ListView extends Component {
    render() {
        return (
            <div>
                {/* ListView - list of all notes */}
                <h2>Your Notes</h2>
                <Notes /> 
            </div>
        );
    }
}

export default ListView;