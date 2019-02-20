import React, { Component } from 'react';
import { StyledSidebar } from '../Styles';

export class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.i = 1;
    }

    deleteAll = () => {
        for(let i = 0; i <= 500; i++){this.props.expungeNote(this.props.notes[i]._id)}
    }

    myLoop = () => {  
    setTimeout(function () {    
        this.props.expungeNote(this.props.notes[this.i]._id) 
        this.i++;                    
        if (this.i < 10) {        
            this.myLoop();          
        }                      
    }, 3000)
    }

    

    render() {
        return (
            <StyledSidebar>
                <h1>Lambda Notes</h1>
                <div className="button navigation" onClick={this.props.collectNotes}>Refresh Notes</div>
                <div onClick={()=>{document.querySelector('.new-note textarea').focus()}} className="button navigation">+ Create New Note</div>
                <div onClick={() => this.props.downloadObjectAsCSV(this.props.notes, 'notes')} className="button navigation">Download as CSV</div>
                <div onClick={this.deleteAll} className="button navigation">Expunge All</div>
                <input onChange={(e) => this.props.searchClear(e)} className="sidebar-input" name="sidebarSearch" placeholder='Search notes...'/>
                <div onClick={(e) => this.props.handleSearchInput(e)} className="button search">Search</div>
            </StyledSidebar>
        )
    }
}


