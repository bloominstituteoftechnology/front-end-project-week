import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';
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
               <NoteContent  key={note._id}>
                   <Link  to={'/note/:id'}><Title>{note.title}</Title></Link> 
                    <p>{note.textBody}</p>
               </NoteContent>
                )
            })}
            
            </NoteWrap>
            
            
        )
    }
}


export default ListView;