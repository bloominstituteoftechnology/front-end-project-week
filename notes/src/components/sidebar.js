import React, {Component} from 'react';
import '../index.css';

class SideBar extends Component {
    constructor(props)
    {
        super(props);
        this.createNote = this.createNote.bind(this);
        this.updateTitleValue = this.updateTitleValue.bind(this);
        this.updateDescValue = this.updateDescValue.bind(this);
    
        this.state = {
            title: undefined,
            desc: undefined
        }
    }

    createNote()
    {        
        const note = {
            title: this.state.title,
            desc: this.state.desc
        }
        // overwrite old
        let notes = JSON.parse(localStorage.getItem("notes"));

        if(notes === undefined || notes == null) 
        {
            notes = [];
        }
       
        notes.push(note);
        localStorage.setItem("notes", JSON.stringify(notes));            

    }

    updateTitleValue(evt)
    {
        this.state.title = evt.target.value;   
    }
    updateDescValue(evt)
    {
        this.state.desc = evt.target.value; 
    }

    render() {
        return(
            <div className="sidebar">
                <h2> Lambda Notes </h2>
                <div className="sidebar-container">
                    <h3> Add A New Note  </h3>
                    <input onChange={this.updateTitleValue} name="title"/>
                    <br />
                    <textarea  onChange={this.updateDescValue} name="description"> </textarea>
                    <br />
                    <button className="nav-btn" onClick={this.createNote}>Add</button>                    
                </div> 
            </div>
        );
    }
}
export default SideBar;