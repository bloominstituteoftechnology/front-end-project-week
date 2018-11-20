import React from 'react';
import axios from 'axios';

// updateNote also deletes, sorry.


// click delete note button
// onClick, dialog box, are you sure?
// if no, close dialog box
// if yes, delete note




class UpdateNote extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            textBody: '',
        }
    }

    componentDidMount() {
        console.log(this.props.match.params.id)
        axios.get(`https://fe-notes.herokuapp.com/note/get/${this.props.match.params.id}`)
        .then(response => {
            this.setState({title: response.data.title, textBody: response.data.textBody})
        })
        .catch(err => {
            console.log(err)
        })
    }

    inputHandler = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault();
        axios.put(`https://fe-notes.herokuapp.com/note/edit/${this.props.match.params.id}`, this.state)
        .then(response => {
            this.setState({response})
        })
        .catch(err => {
            console.log(err)
        })
    }

    render(){
        return(
            <div>
                <h3>Update note</h3>
                <form onSubmit={this.submitHandler}>
                <input
                    name='title'
                    onChange={this.inputHandler}
                    value={this.state.title}
                    />
                <input
                    name='textBody'
                    placeholder='enter some content'
                    onChange={this.inputHandler}
                    value={this.state.textBody}
                    />
                <button type='submit' className="button" >Update this note</button>
                </form>
            </div>
            
        )
    }


}

export default UpdateNote