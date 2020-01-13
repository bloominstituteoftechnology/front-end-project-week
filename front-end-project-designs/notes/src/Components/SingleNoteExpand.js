import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ReactMarkdown from "react-markdown";

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
        //console.log("props in singlenoteexpand    :  ", this.props)
        //console.log("SingleNoteExapand  : ", this.state.textbody)

        return (
            <div className = "expand-div">
                <div className = "span-div">
                    {/*Link Edit button... */}
                    <Link to = {`/notes/edit/${this.props.match.params._id}`} className = "no-decoration">
                        <span>Edit</span>
                    </Link>                    
                    
                    {/*Link Delete button... */}
                    <Link to = {`/notes/delete/${this.props.match.params._id}`} className = "no-decoration">
                        <span>Delete</span>
                    </Link>
                </div>
                <div className = "note-div">
                    <h2> {this.state.title} </h2>
                    <ReactMarkdown source={this.state.textbody} />
                    {/*<p> {this.state.textbody} </p>*/}
                </div>
            </div>
        )   
    }
}

export default SingleNoteExpand;