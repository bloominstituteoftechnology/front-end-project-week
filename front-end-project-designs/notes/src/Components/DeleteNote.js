import React from 'react';
import './Style.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

class DeleteNote extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          title: "",
          textbody: ""
        };
    }

    delete = () => {
        axios
          .delete(`https://fe-notes.herokuapp.com/note/delete/${this.props.match.params._id}`)    
          .then(response => this.props.history.push('/notes'))
          .catch(error => console.log(error));
    }

 
    render() {
        //console.log("Deletecomponent   :  ",this.props.history.push);

        //console.log("DeleteNote  :  ", this.props.match.params._id) //getting correct id passed thro route here
        return (
            <div className = "ModalContent">
                <div className = "delete-note-main-div">
                    <div className = "delete-confirm">Are you sure you want to delete this?</div>

                    <div className = "Buttons">
                        <button onClick = {this.delete} className = "delete-button">Delete</button>
                        <Link to = {`/notes/${this.props.match.params._id}`} className = "no-button"> <button >No</button> </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default DeleteNote;