import React from 'react';
import axios from 'axios';

// take an id DONE
// has a form with title and textBody
// onClick axios post? or put
// new axios call with the ID in the url // first argument: props.params, second: input value
// sends an updated note with the same id? idk sounds right
// button? 




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
                <h3>You're going to edit this note:</h3>
                <h4>{this.state.title}</h4>
                <p>{this.state.textBody}</p>
                <h3>Update note</h3>
                <form onSubmit={this.submitHandler}>
                <input
                    name='title'
                    placeholder='enter a title'
                    onChange={this.inputHandler}/>
                <input
                    name='textBody'
                    placeholder='enter some content'
                    onChange={this.inputHandler}/>
                <button type='submit' className="button" >Update this note</button>
                </form>
            </div>
            
        )
    }


}

export default UpdateNote