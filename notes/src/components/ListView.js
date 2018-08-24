import React, { Component } from 'react';

import './ListView.css';

class ListView extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            content: "",
            notes: [{ title: 'Test Note Lorem', content: 'Test Note Ipsum' }]
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
                    <form>

                    </form>
                </div>
            </div>
        )
    }
    
}

export default ListView;