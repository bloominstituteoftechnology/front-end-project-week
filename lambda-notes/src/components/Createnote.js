import React from 'react';
import axios from 'axios';

class CreateNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: '',
        };
    }

    addNote = () => {

        // axios({
        //     method: 'post',
        //     url: "https://killer-notes.herokuapp.com/note/create",
        //     data: {
        //         title: `${this.state.title}`,
        //         text: `${this.state.text}`,
        //     }
        // })
      
        //   this.setState({
        //     title: '',
        //     text: '',
            
        //   });
        //   this.props.history.push("/")
        // }
        axios
            .post("https://killer-notes.herokuapp.com/note/create", this.state)
            .then(
                this.setState({ title: '', text: '' })
            )
            .catch(error => console.log(error));
        this.props.history.push("/")
    }

    handleChange = event => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <div className='create-container'>
                <div className='header'><h4>Add New Note:</h4></div>
                <form className='create-form'> 
                    <input
                        type="text"
                        className="create-name"
                        placeholder='Note Name'
                        onChange={this.handleChange}
                        name="title"
                        value={this.state.title}
                    />
                    <input
                        type="text"
                        className="create-text"
                        placeholder='Note Info'
                        onChange={this.handleChange}
                        name="text"
                        value={this.state.text}
                    />
                </form>
                <div>
                    <button className="add-button" onClick={this.addNote}>Add</button>
                </div>

            </div>
        )
    }
}

export default CreateNote;
