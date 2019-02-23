import React from 'react';

import { Link } from 'react-router-dom';

//props from sbview.js  getUpdatedNotes={this.getUpdatedNotes}

const ViewNotesButton = props => {
    return (
        <div>
            <Link  
                to="/notes"
                onClick={() => props.getUpdatedNotes()}    
            >
                <button className="sbButtons">
                    <img src="https://img.icons8.com/material/20/FFFFFF/real-estate.png" alt="home" />
                        <p>Home</p>
                </button>
            </Link>
        
        </div>
    )
}

export default ViewNotesButton