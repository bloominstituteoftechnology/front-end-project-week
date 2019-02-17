import React from 'react';
import axios from 'axios';

class EditNote extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            note: {},
            newTitle: null,
            newTextBody:null
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id
        // console.log(id)
        this.getNote(id)
    }

    getNote = id => {
        axios
            .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
            .then(response => {
                // console.log(this.state)
                this.setState({ note: response.data })
                // console.log(response)
                // this.props.updateNote(this.state)
                // console.log(this.state)

               
            })
            .catch(error => {
                console.log(error)
            })
    }


    updateTitleHandler = (e) => {
        this.setState({ 
            newTitle: e.target.value,
            note: {
                title: e.target.value
            }
        })
    }

    returnHome = () => {
        this.props.history.push("/")
    }

    updateTextBodyHandler = (e) => {
        this.setState({ 
            newTextBody: e.target.value,
            note: {
                textBody: e.target.value
            }
        })
    }

    makeChange = (e) => {
        e.preventDefault();
        const id = this.props.match.params.id;
        console.log(this.state)
        axios
            .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, {
                title: this.state.newTitle,
                textBody: this.state.newTextBody
            })
            .then(response => {
                    this.returnHome();
            })
            .catch(error => {
                console.log(error)
            })
    }

    render(){
        // console.log(this.props.match.params.id)
        return(
            <div>
                <h1>EDIT NOTE</h1>
                <form onSubmit={this.makeChange}>
                    <input
                        type="text"
                        name="title"
                        value={this.state.note.title}
                        onChange={this.updateTitleHandler}
                    />
                    <input
                        type="text"
                        name="textBody"
                        value={this.state.note.textBody}
                        onChange={this.updateTextBodyHandler}
                    />
                    <button type="submit">Save</button>
                </form>
            </div>
        )
    }
}

export default EditNote;