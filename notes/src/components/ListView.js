import React, { Component } from 'react';

// import CreateView from './CreateView';

import './ListView.css';

class ListView extends Component {
    constructor() {
        super();
        this.state = {
            newNote: "",
            notes: []
        }
    }

    // handleAlert = () => {
    //     return (
    //         alert('Weehee!!!')
    //     )
        
    // }

    render() {
        return (
            <div className="note-container">
                <h5>Your Notes: </h5>
                <div>
                    
                </div>
            </div>
        )
    }
    
}

export default ListView;