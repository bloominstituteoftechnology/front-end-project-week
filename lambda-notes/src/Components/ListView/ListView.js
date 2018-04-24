import React, { Component } from 'react';
import SideBar from "../SideBar/SideBar"
import "./ListView.css";
class ListView extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className = "body">
                <SideBar/>
                <div className = "notes">
                    <div className = "list">
                        <h2>Your Notes:</h2>
                    </div>
                    <div className = "row">
                        <div className = "card">
                            <h2 className = "underline">Todo</h2>
                            <p>Lorem ipsum dolor sit amet, no natum omnis cum, 
                                ius an natum ceteros, qui cibo volumus aliquando cu.</p>
                        </div>
                        <div className = "card">
                            <h2 className = "underline">Todo</h2>
                            <p>Lorem ipsum dolor sit amet, no natum omnis cum, 
                                ius an natum ceteros, qui cibo volumus aliquando cu.</p>
                        </div>
                        <div className = "card">
                            <h2 className = "underline">Todo</h2>
                            <p>Lorem ipsum dolor sit amet, no natum omnis cum, 
                                ius an natum ceteros, qui cibo volumus aliquando cu.</p>
                        </div>
                    </div>

                    <div className = "row">
                        <div className = "card">
                            <h2 className = "underline">Todo</h2>
                            <p>Lorem ipsum dolor sit amet, no natum omnis cum, 
                                ius an natum ceteros, qui cibo volumus aliquando cu.</p>
                        </div>
                        <div className = "card">
                            <h2 className = "underline">Todo</h2>
                            <p>Lorem ipsum dolor sit amet, no natum omnis cum, 
                                ius an natum ceteros, qui cibo volumus aliquando cu.</p>
                        </div>
                        <div className = "card">
                            <h2 className = "underline">Todo</h2>
                            <p>Lorem ipsum dolor sit amet, no natum omnis cum, 
                                ius an natum ceteros, qui cibo volumus aliquando cu.</p>
                        </div>
                    </div>


                    <div className = "row">
                        <div className = "card">
                            <h2 className = "underline">Todo</h2>
                            <p>Lorem ipsum dolor sit amet, no natum omnis cum, 
                                ius an natum ceteros, qui cibo volumus aliquando cu.</p>
                        </div>
                        <div className = "card">
                            <h2 className = "underline">Todo</h2>
                            <p>Lorem ipsum dolor sit amet, no natum omnis cum, 
                                ius an natum ceteros, qui cibo volumus aliquando cu.</p>
                        </div>
                        <div className = "card">
                            <h2 className = "underline">Todo</h2>
                            <p>Lorem ipsum dolor sit amet, no natum omnis cum, 
                                ius an natum ceteros, qui cibo volumus aliquando cu.</p>
                        </div>
                    </div>


                    <div className = "row">
                        <div className = "card">
                            <h2 className = "underline">Todo</h2>
                            <p>Lorem ipsum dolor sit amet, no natum omnis cum, 
                                ius an natum ceteros, qui cibo volumus aliquando cu.</p>
                        </div>
                        <div className = "card">
                            <h2 className = "underline">Todo</h2>
                            <p>Lorem ipsum dolor sit amet, no natum omnis cum, 
                                ius an natum ceteros, qui cibo volumus aliquando cu.</p>
                        </div>
                        <div className = "card">
                            <h2 className = "underline">Todo</h2>
                            <p>Lorem ipsum dolor sit amet, no natum omnis cum, 
                                ius an natum ceteros, qui cibo volumus aliquando cu.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListView
