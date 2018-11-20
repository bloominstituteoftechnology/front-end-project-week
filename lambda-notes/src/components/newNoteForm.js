import React from 'react';
import { connect } from 'react-redux';
import { addNewNote } from './actions';
import { Link } from 'react-router-dom';



class NewNoteForm extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            title: '',
            textBody: ''
        }
    }

    inputHandler = e =>{
        this.setState({[e.target.name]: e.target.value})
    }

    newNote=e=>{
       
        const newNote = {
            title:this.state.title,
            textBody: this.state.textBody
        }
        this.props.addNewNote(newNote);
            this.setState({title: '', textBody: ''})
    }

    render(){
        return(
            <div>
             <h1>New Note:</h1>
                <input type='text' name='title' value={this.state.title} placeholder='New Note Name' onChange={this.inputHandler} ></input>
                <textarea type='text' name='textBody' value={this.state.textBody} placeholder='New Note Content' onChange={this.inputHandler}/>
                <Link to='/' ><button onClick={this.newNote}></button></Link>
            </div>
        )
    }
}
const mapStateToProps = ()=>{
    return {}
}

export default connect(mapStateToProps, { addNewNote })(NewNoteForm); 