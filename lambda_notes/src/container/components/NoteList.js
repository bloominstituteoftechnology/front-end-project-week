import React, { Component } from 'react';
import Notes from '../func/Notes';
import { Route, Link } from 'react-router-dom';
import '../component.css';




class NoteList extends Component{
    constructor(){
        super();
}

    
    render(){
    console.log("NoteListProps", this.props)

        console.log(this.props.NoteData);
        return (
            <div className="nL-container" >
                {this.props.NoteData.map((data, index) => <Link to={`/Notes/${data.title}`} key={data.title}  > <Notes class=""  NoteData={data} /> </Link> )} 
            </div>
        )
    }
}

export default NoteList;