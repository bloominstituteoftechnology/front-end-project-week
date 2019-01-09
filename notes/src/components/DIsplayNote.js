import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import  EditNote  from './EditNote'




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

    editNote = e => {
        console.log(this.props.match.params.id)
        this.props.history.push(`/view-note/${this.props.match.params.id}/edit`);
        
      };

    deleteNote = () => {
        console.log(this.props.match.params.id);
        this.props.delete(this.props.match.params.id);
        this.props.history.push("/");
    };


    render(){
        if(!this.state.note){
            return(
                <div>Loading data...</div>
            )
        }
        return(
            <div className='inNote'> 
                <div className='topBar'>   
                    <button onClick={this.editNote}>edit</button>
                    <button onClick={this.deleteNote}>delete</button>
                </div>
                <div>
                    <h3>{this.state.note.title}</h3>
                    <p>{this.state.note.textBody}</p>
                </div>
                
                <Route path='/view-note/:id/edit'
                    render={props => <EditNote {...props} note={this.state.note}  updateNote={this.props.edit}/>} />
            </div>
        )
    }
}




export default DisplayNote;