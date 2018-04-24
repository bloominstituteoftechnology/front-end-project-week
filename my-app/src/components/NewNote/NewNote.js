import React, { Component } from 'react';

class NewNote extends Component {
    render() {
        return(
            <div className="Note">
                <div className= 'Note-feature'> 
                    <div>
                        <h1> Lambda Notes </h1>
                        <p className = 'Note-buttons'> View Your Notes </p> 
                        <p className = 'Note-buttons'> +Create New Notes </p> 
                    </div>
                </div>
            </div>
        )
    }
}

export default NewNote;