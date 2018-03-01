import React from 'react';
import '../styles/App.css';

class Createnotes extends React.Component {
    state = {
        notes: [],
        title:'',
        paragragh:'',
    }
    addNewNote = (e) =>{

    }
    handleInputChange =(e)=> {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        return (
            <div className="notes-container">
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
}
export default Createnotes;