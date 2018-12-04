import React, {Component} from 'react';

class DisplayNote extends Component{
    constructor(props){
        super(props);
        this.state = {
            note: props.notes.find(note=>props.match.params.id === note._id)
        }
        
        window.onbeforeunload = this.saveNote;
    }

    saveNote = ()=>{
        localStorage.setItem('note', JSON.stringify(this.state.note));
    }

    componentDidMount(){
        if(!this.state.note){
            this.setState({note: JSON.parse(localStorage.getItem('note'))});
        }
    }

    editNote = note=>{
        console.log('Edit Note');
    }

    deleteNote = note=>{
        console.log('Delete Note');
    }

    render(){
        if(!this.state.note){
            return(
                <div>Loading data...</div>
            )
        }
        return(
            <div>
                <button onClick={this.editNote}>edit</button>
                <button onClick={this.deleteNote}>delete</button>
                <h3>{this.state.note.title}</h3>
                <p>{this.state.note.textBody}</p>
            </div>
        )
    }
}

export default DisplayNote;