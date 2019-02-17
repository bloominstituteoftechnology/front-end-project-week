import React from 'react';
import '../App.css';
import axios from 'axios';

class Note extends React.Component {
    constructor(props){
        super(props)
        this.state={
            note: {}
        }
    }
    
    componentDidMount() {
        const id = this.props.match.params.id
        this.fetchNote(id);       
    }

    fetchNote = id => {
        axios
            .get(`http://localhost:5050/api/notes/${id}`)
            .then(response => {
                console.log(response)
                this.setState({note: response.data[0]})
            })
            .catch(err => {
                console.log("IN CATCH", err);
            })
    }
    
    
    render(){
        return(
            <div className='note'>
                <h2>{this.state.note.title}</h2>
                <div>{this.state.note.note}</div>
            </div>
        )
    }
}

export default Note;