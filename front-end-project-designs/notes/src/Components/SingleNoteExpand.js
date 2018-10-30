import React from 'react';
import axios from 'axios';

class SingleNoteExpand extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            title : '',
            textbody : ''
        }
    }

    componentDidMount() {
        axios
            .get(`https://fe-notes.herokuapp.com/note/get/${this.props.match.params._id}`)
            .then(response => {
                console.log("RRRRR  :: ",response.data);
                this.setState({ title : response.data.title ,
                                textbody : response.data.textBody })
             })
            .catch(error => console.log(error));
    }

    render() {
        console.log("SingleNoteExapand  : ", this.state.textbody)
        return (
            <div className = "expand-div">
                <div className = "span-div">
                    <span>Edit</span>
                    <span>Delete</span>
                </div>
                <div className = "note-div">
                    <h2> {this.state.title} </h2>
                    <p> {this.state.textbody} </p>
                </div>
            </div>
        )   
    }
}

export default SingleNoteExpand;