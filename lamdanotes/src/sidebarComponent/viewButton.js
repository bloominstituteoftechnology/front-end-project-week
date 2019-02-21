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
                <button className="sbButtons">View All Notes</button>
            </Link>
        
        </div>
    )
}

export default ViewNotesButton