import React from 'react';
import axios from 'axios';

import Note from './note'

class NotesList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            notes: []
        }
    }
    componentDidMount(){
        axios
            .get('https://fe-notes.herokuapp.com/note/get/all')
            .then(response =>{
                console.log(response) 
                this.setState({notes: response.data})})
                .catch(err => console.log(err))

    }

    render(){
        return (
            <div>
              {this.state.notes.map(item => 
                <Note key={item.id} note={item} />
              )}
            </div>
        )
    }

}
export default NotesList;