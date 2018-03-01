import React from 'react';
import '../styles/App.css';
import { Route, Link } from 'react-router-dom';


function Createnote() {
        return (
           
            <div className="notes-container">
             <div> Create View works!</div>
                <form onSubmit={this.addNewNote}>
                <input className="new-title" 
                type="text" name="title" 
                value={this.state.title} 
                onChange={this.handleInputChange}/> 

                <textarea placeholder="Create New Note"  
                type="text" name="paragragh" 
                value={this.state.paragragh} 
                onChange={this.handleInputChange}> </textarea>

                <button>Save</button>
                
                </form>
            </div>

            )
  }          
        export default Createnote;