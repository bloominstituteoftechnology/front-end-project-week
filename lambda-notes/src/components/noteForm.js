import React from 'react';
import { connect } from 'react-redux';
import { addNewNote } from './actions';
import { Link } from 'react-router-dom';

class NoteForm extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            title: '',
            textBody: '',
            updateNote: null
        }
    }

    inputHandler = e =>{
        this.setState({[e.target.name]: e.target.value})
    }
    
    componentDidMount(){
        this.setState({
            title: this.props.title,
            textBody: this.props.text,
            updateNote: this.props.update
            
        })
    }

     newNote=e=>{
        const newNote = {
            title:this.state.title,
            textBody: this.state.textBody
        }
        this.props.addNewNote(newNote);
    }

    render(){
        return(
            <div>
                <h1>{this.props.purpose}</h1>
               <input type='text' name='title' value={this.state.title} placeholder={this.props.tph} onChange={this.inputHandler} ></input>
               <textarea type='text' name='textBody' value={this.state.textBody} placeholder={this.props.tbph} onChange={this.inputHandler}/>
               <Link to='/' > <button onClick={!this.state.updateNote?this.newNote:null}> </button> </Link>
           </div>

        )
    }
}

const mapStateToProps = ()=>{
    return {}
}

export default connect(mapStateToProps, {addNewNote})(NoteForm); 