import React, { Component } from 'react';
import CreateNote from 'CreateNote';

class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="topBar">
                    <h2>Your Notes:</h2>
                </div>   
                <div className="note-container">
                    {       
                    this.props.notes.map((note, i) => {
                        return (
                            <CreateNote key={i} />
                        );
                    })
                     }
                 </div>
        );  </div>
    }
}

export default Home;