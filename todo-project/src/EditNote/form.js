import React from 'react'
import './form.css'

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
        placeholder={this.props.note.content}
        name='content'
        value={this.props.content}
        />
        <button onClick={() => this.props.updateNote(this.props.note.id, this.props.note.userId)} className='formButton' >Update</button>
    </div>
    );
}
}




export default Form;

