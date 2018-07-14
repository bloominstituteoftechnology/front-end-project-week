import React, { Component } from 'react';
import Notes from '../func/Notes';
import { Link } from 'react-router-dom';
import '../component.css';

class NoteList extends Component{
    render(){
        return (
            <div className="nL-container" >
                {this.props.NoteData.map((data, index) => <Link to={`/Notes/${data.title}`} key={data.title}  > <Notes class=""  NoteData={data} /> </Link> )} 
            </div>
        )
    }
}

export default NoteList;