import React, { Component } from 'react';

 class EditNote extends Component {
     constructor(props) {
         super(props);
         this.state = {
            addContent: '',
            addTitle: ''  
         }
     }

    handleChange = (e) => {
        console.log('HANDLE_CHANGE_NAME', e.target.name, 'HANDLE_CHANGE_VALUE', e.target.value);
        this.setState({[e.target.name]: e.target.value});
    };
 
    render() {
        return(
            <div className='input d-flex flex-column' >
                <h4 className='New_note_header text-left pl-3 pt-5 '> Edit Note: </h4>
                <input className='input_title p-1 ml-3 mt-3 border rounded'
                    type='text'
                    placeholder='Note Title'
                    name='addTitle'
                    onChange={this.handleChange} 
                />
                 <input className='input_content p-1 ml-3 mt-2 mr-5 border rounded'
                    type='text'
                    placeholder='Note Content'
                    name='addContent'
                    onChange={this.handleChange} 
                />
                <button onClick={ () => this.props.handleAddNote(this.state.addContent, this.state.addTitle)} 
                    type='button' 
                    className='save_button btn btn-sm ml-3 mt-2'
                > 
                    Update
                </button>
            </div>
        );
    }
}


export default EditNote;