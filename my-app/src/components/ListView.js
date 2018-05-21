import React, { Component } from 'react';
import Notes from './Note';

class ListView extends Component {
    render() {
        return (
            <div>
                {/* ListView - list of all notes */}
                <Notes /> 
            </div>
        );
    }
}

export default ListView;