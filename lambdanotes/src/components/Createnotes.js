import React from 'react';
import '../styles/App.css';

function Createnotes() {
    return (
        <div className="notes-container">
            <form onSubmit="">
            <input className="new-title"/> 
            <input className="new-content"/>
            <button>Save</button>
            <li> It Works!</li>
            </form>
        </div>
        
    )
}
export default Createnotes;