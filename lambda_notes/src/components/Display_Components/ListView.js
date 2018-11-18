import React, { Component } from 'react'
import axios from 'axios';
import CreateNewNote from './CreateNewNote'
import { Title, NoteWrap, NoteContent } from '../Styles/ListViewStyle';



class ListView extends Component {
    constructor() {
        super()
    this.state = {
        notes: [],

    }

}

    componentDidMount() {
    
    axios.get(`https://fe-notes.herokuapp.com/note/get/all`)
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
            {this.state.notes.map( note => {
                return (
                    //noteCards
               <NoteContent key={note.id}>     
                    <Title>{note.title}</Title>
                    <p>{note.textBody}</p>
               </NoteContent>  
                )
            })}
            
            </NoteWrap>
            
        )
    }
}


export default ListView;