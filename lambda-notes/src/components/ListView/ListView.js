import React, { Component } from 'react';
import "./ListView.css";
class ListView extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className = "body">
                <div className = "sideBar">
                    <div className = "logo">
                        <h1>Lambda Notes</h1>
                    </div>
                    <button>View Your Notes</button>
                    <button>+Create New Note</button>
                </div>
            </div>
        )
    }
}

export default ListView