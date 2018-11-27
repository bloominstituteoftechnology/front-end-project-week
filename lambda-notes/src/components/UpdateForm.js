import React, { Component } from 'react';
import axios from 'axios';

class UpdateForm extends Component {
    constructor(props){
        super(props);
        this.state={
            title: "",
            textBody: "",
            tags: [],
            id: null
        }
    }

    componentDidMount(){
        const id =this.props.match.params.id;
        this.setState({
            id: id
        })
    }

    inputHandler =(e)=>{
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (id)=>{
        axios
            .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, {
                title: this.state.title,
                textBody: this.state.textBody,
                tags: this.state.tags,
            })
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        return(
            <div>
                <form onSubmit={this.submitHandler(this.state.id)}>
                    <input type="text" name="title" value={this.state.title} placeholder="Title" onChange={this.inputHandler} />
                    <input type="text" name="textBody" value={this.state.textBody} placeholder="Notes" onChange={this.inputHandler}/>
                    <input type="text" name="tags" value={this.state.tags} placeholder="Tags" onChange={this.inputHandler}/>
                    <input type="submit" value="Update Note" />
                </form>
            </div>
        )
    }

}

export default UpdateForm