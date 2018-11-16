import React from 'react';



class NewNoteForm extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            title: '',
            note: '',
            tags: [],
        }
    }

    inputHandler = e =>{
        this.setState({[e.target.name]: e.target.value.toUpperCase()})
    }

    render(){
        return(
            <div>
             <h1>New Note:</h1>
            <from>
                <input type='text' name='title' value={this.state.title} placeholder='New Note Name' ></input>
                <textarea type='text' name='note' value={this.state.note}
            </from>
            </div>
        )
    }
}
export default NewNoteForm;