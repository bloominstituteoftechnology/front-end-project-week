import React, { Component } from 'react';
import axios from 'axios';
import jsonp from 'jsonp';
import '../component.css';

const api = process.env.REACT_APP_API || 'https://sheltered-sands-52060.herokuapp.com';

class CreateNote extends Component{
    constructor(){
        super()
        this.state = {
            title: "",
            content: "",  
            notesList: []         
        }
        
    }
    // componentDidMount() {
    //     const token = localStorage.getItem('jwt');
    //     const requestOptions = {
    //         headers: {
    //             Authorization: token
    //         }
    //     }
    // }


    handleInputChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]:e.target.value});
    }

    submitNote = (e) => {
        const token = localStorage.getItem('jwt');
        const requestOptions = {
            headers: {
                Authorization: token
            }
        }
        e.preventDefault();
        console.log("Does it match", this.props.match.path === `/Create/edit/:title` ? "Yes" : "No")
        if(this.props.match.path === `/Create/edit/:title`){
            const newNote = this.state.notesList;
            const item = { title: this.state.title, content: this.state.content};
            newNote.push(item);
            axios.put(`${api}/api/edit/${this.props.NoteData._id}`, this.state)
                .then(response => {
                    console.log('response', response.data);
                    this.props.history.push('/Notes');
                    window.location.reload();
                })
                .catch(err => {
                    console.log(err)
                })
            this.setState({ title: "", content: "", newNote})
        }else{
            const newNote = this.state.notesList;
            const item = { title: this.state.title, content: this.state.content };
            newNote.push(item);
            axios.post(`${api}/api/create/note`, requestOptions, this.state)
                .then(response => {
                    console.log('response', response.data)
                    this.props.history.push('/Notes');
                    window.location.reload();
                })
                .catch(err => {
                    console.log("requestOptions : ", requestOptions);
                    console.log(err)
                })
            this.setState({ title: "", content: "", newNote })
        }
        
    }

    render() {
        return(
            <div>
                <form>
                    <div>
                        <label>
                            Title:
                            <input name="title" value={this.state.title} onChange={this.handleInputChange}/>
                        </label>
                    </div>
                    <div className="content">
                        <label>
                            Content:
                            <input name="content" value={this.state.content} onChange={this.handleInputChange}/>
                        </label>
                    </div>
                    <button onClick={this.submitNote}>Submit Note</button>
                </form>
            </div>
        )
    }
}

export default CreateNote;