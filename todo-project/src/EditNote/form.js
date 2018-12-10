import React from 'react'
import './form.css'
import { NavLink } from 'react-router-dom'

class Form extends React.Component {
    

    render(){
    return (
    <div className='form'>
        <input 
        className='titleForm'
        type='text'
        onChange={this.props.handleInput}
        placeholder={this.props.note.title}
        name='title'
        value={this.props.title}
        />
        <textarea
        className='textBody'
        type='text'
        onChange={this.props.handleInput}
        placeholder={this.props.note.textBody}
        name='textBody'
        value={this.props.textBody}
        />
        <NavLink exact to='/' ><button onClick={() => this.props.updateNote(this.props.note._id)} className='formButton' >Update</button></NavLink>
    </div>
    );
}
}




export default Form;

