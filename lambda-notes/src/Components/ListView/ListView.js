import React, { Component } from 'react';
import "./ListView.css";
class ListView extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div className = "sideBar">
                    <h1>Lambda Notes</h1>
                    <button>View Your Notes</button>
                    <button>+Create New Note</button>
                </div>
            </div>
        )
    }
}

export default ListView
