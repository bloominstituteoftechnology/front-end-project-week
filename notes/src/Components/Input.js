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
            <div onSubmit={props.handleSubmit}>
                <label>
                    Create New Note:
                </label>
                <input
                    type='text'
                    placeholder='Note Title'
                    name='Title'
                    onChange={props.handleChange} 
                />
                 <input
                    type='text'
                    placeholder='New Content'
                    name='Content'
                    onChange={props.handleChange} 
                />
                {/* <input type='submit' value='Save'/> */}
                <button onClick={props.handleSubmit}>
                Save
                </button>
            </div>
        );
    }


export default Input;