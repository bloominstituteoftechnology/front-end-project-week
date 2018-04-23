import React, { Component } from 'react';

// class Input extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             value: []
//             }

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
// }
// render(){

 const Input = props => {
    
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Create New Note:
                </label>
                <input
                    type='text'
                    placeholder='Note Title'
                    name='note'
                    onChange={props.handleChange} 
                />
                 <input
                    type='text'
                    placeholder='New Content'
                    name='content'
                    onChange={props.handleChange} 
                />
                <input type='submit' value='Save'/>
            </form>
        );
    }


export default Input;