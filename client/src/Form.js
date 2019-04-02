import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Form extends Component {
    constructor(props){
        super(props);
        this.state ={
            title: '',
            body: '',
            id: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    componentDidMount() {
        this.setState({id: this.props.id, title: this.props.title, body: this.props.body})
    }

    handleChange(event){
        this.setState({[event.target.name] : event.target.value});
    }

    handleSubmit(event) {
        console.log(this.props, "handleSubmit props");
        if(!this.props.editing) {
            let promise = axios.post("http://localhost:5555/api/notes/", this.state);
            promise 
                .then(response => {
                    console.log(response);
                    window.location.reload();

                })
                .catch(error => {
                    console.log(error);
                });
            }
        else {
            let promise = axios.put(`http://localhost:5555/api/notes/${this.state.id}`, this.state);
            promise
                .then(response => {
                    console.log(response);
                    window.location.reload();
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }

    render() {
        console.log(this.state);
        return (
            <div className="edit-create-form">
                <input type="text" name= "title" onChange={this.handleChange} className="input-text" value={this.state.title}/>
                <textarea type="text" name= "body" onChange={this.handleChange} className="input-text-area" value={this.state.body}/>
                <Link to="/" onClick={this.handleSubmit}><div  className="button save-button">Save</div></Link>
            </div>
        );
    }
}

export default Form;
