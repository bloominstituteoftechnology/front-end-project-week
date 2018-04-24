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
