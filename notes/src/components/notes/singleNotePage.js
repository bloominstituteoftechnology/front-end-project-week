import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

class SingleNotePage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:'',
            textBody:''
        }
    }
    componentDidMount() {
        axios.get(`https://killer-notes.herokuapp.com/note/get/${this.props.match.params.noteId}`)
        .then(res=>this.setState({title:res.data.title,textBody:res.data.textBody}))
        .catch(err=>console.log(err));
    }
    render(){
        return(
            <div>
            <span>Edit</span>
            <span>Delete</span>
            <h2>{this.state.title}</h2>
            <p>{this.state.textBody}</p>
            </div>
        )
    }
}
export default SingleNotePage;