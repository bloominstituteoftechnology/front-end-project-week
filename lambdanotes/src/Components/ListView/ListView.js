import React, { Component } from 'react';
import './ListView.css';
import SideBar from '../SideBar/SideBar.js';
import {Link} from 'react-router-dom';

class ListView extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className = "body">
            <SideBar />
            <div className = "notes">
                <div className = "list">
                    <h2>Your Notes:</h2>
                </div>
                <div className = "row">
                    <div className = "card">
                        <h2 className = "underline">Todo</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable. </p>
                    </div>
                    <div className = "card">
                        <h2 className = "underline">Todo</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable. </p>
                    </div>
                    <div className = "card">
                        <h2 className = "underline">Todo</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable. </p>
                    </div>
                </div>

                <div className = "row">
                    <div className = "card">
                        <h2 className = "underline">Todo</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable. </p>
                    </div>
                    <div className = "card">
                        <h2 className = "underline">Todo</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable. </p>
                    </div>
                    <div className = "card">
                        <h2 className = "underline">Todo</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable. </p>
                    </div>
                </div>


                <div className = "row">
                    <div className = "card">
                        <h2 className = "underline">Todo</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable. </p>                   </div>
                    <div className = "card">
                        <h2 className = "underline">Todo</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable. </p>                    </div>
                    <div className = "card">
                        <h2 className = "underline">Todo</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable. </p>
                    </div>
                </div>


                <div className = "row">
                    <div className = "card">
                        <h2 className = "underline">Todo</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable. </p>
                    </div>
                    <div className = "card">
                        <h2 className = "underline">Todo</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable. </p>
                    </div>
                    <div className = "card">
                        <h2 className = "underline">Todo</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
}
 
export default ListView;