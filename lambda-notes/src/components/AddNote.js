import React from 'react';

class AddNote extends React.Component {
    state={
        id: 2,
        title: '',
        text: '',
    }

    handleInputChange = e => {
        this.setState({ [e.target.name] : e.target.value });
    };

    render() {
        return(
            <div className='AddNoteWrapper'>
                <form 
                    className='AddNote-form'
                    id='addNote'
                    onSubmit={e => {
                        e.preventDefault();
                        this.props.onSubmit(this.state);
                        this.setState(prevState => ({
                            id: Date.now(),
                            title: '',
                            text: '',
                        }));
                    }}
                >
                    <input 
                        type="text"
                        placeholder='Title'
                        value={this.state.title}
                        name='title'
                        onChange={this.handleInputChange}
                    />
                    <textarea 
                        name="" 
                        id="" 
                        cols="30" 
                        rows="10"
                        placeholder='Content'
                        onChange={this.handleInputChange}
                        >{this.state.text}</textarea>
                    <button>Save</button>
                </form>
            </div>
        );
    }
}

export default AddNote;