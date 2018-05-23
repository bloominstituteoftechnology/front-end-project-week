import React, { Component } from 'react';
import Notes from '../func/Notes';
import { Route, Link } from 'react-router-dom';




class NoteList extends Component{
    constructor(){
        super();
}

    
    render(){
        console.log(this.props.NoteData);
        return (
            <div >
                {this.props.NoteData.map((data, index) => <Link to={`/Notes/${data.title}`} key={data.id} > <Notes  NoteData={data} /> </Link> )} 
            </div>
        )
    }
}

export default NoteList;