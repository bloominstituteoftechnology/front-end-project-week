import React, { Component } from 'react';

import './ListView.css';

class ListView extends Component {

    // handleAlert = () => {
    //     return (
    //         alert('Weehee!!!')
    //     )
        
    // }

    render() {
        return (
            <div className="note-container">
                <h3>Your Notes: </h3>
                <div>
                    <button color="primary" onClick={this.handleAlert}>Note</button>{' '}
                </div>
            </div>
        )
    }
    
}

export default ListView;