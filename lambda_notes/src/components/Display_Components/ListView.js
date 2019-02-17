import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import {NoteHeading } from '../Styles/AppStyle';
import { Title, NoteWrap, NoteContent } from '../Styles/ListViewStyle';



class ListView extends Component {
    constructor() {
        super()
    this.state = {
        notes: [],
    }

}
    componentDidUpdate() {
    
    axios.get(`http://localhost:4500/api/notes`)
        .then( res => {
            this.setState({
            notes: res.data,
            })
        })
        .catch( err => {
            throw new Error(err);
        })
        
}

    render() {
        return (
            <NoteWrap>
                <NoteHeading></NoteHeading>
            {this.state.notes.map( note => {
                return (
               <NoteContent  key={note.id}>
                   <Link to={`/note/${note.id}`} note={this.props.notes} ><Title>{note.title}</Title></Link> 
                    <p>{note.note}</p>
               </NoteContent>
                )
            })}
            </NoteWrap>
            
            
        )
    }
}


export default ListView;