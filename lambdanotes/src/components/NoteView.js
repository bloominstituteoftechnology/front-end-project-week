import React from 'react'

import axios from 'axios'

import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { deleteNote } from '../actions/noteAction'

import '../styles/NoteView.css'

class NoteView extends React.Component {
    constructor(){
        super();
        this.state ={
            note: {},
            isToggleOn: false,
        }
    }

    // componentDidMount(){
    //     const id = this.props.match.params.id
    //     axios
    //     .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
    //     .then(response => {
    //         this.setState({ note: response.data })
    //     })
    //     .catch(err => {
    //         console.log("Fail to Get INDIVIDUAL note", err)
    //     })
    // }

    componentDidMount(){
        const id = this.props.match.params.id
        axios
        .get(`http://localhost:3000/notes/${id}`)
        .then(response => {
            this.setState({ note: response.data })
            console.log(id)
        })
        .catch(err => {
            console.log("Fail to Get INDIVIDUAL note", err)
        })
    }


    handleDelete = event => {
        event.preventDefault();
        //this.props.handleDeleteNote(this.props.match.params.id)
        this.props.deleteNote(this.props.match.params.id)
    }

    handleClick = () => {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }


    render(){
        console.log(this.props.match.params.id)
        return (
            <div>
                <div className="note-menu">
                    {/* <div><Link to={`/edit/${this.state.note.id}`}> edit </Link></div> */}
                    <div><Link to={`/edit/${this.props.match.params.id}`}> edit </Link></div>
                    <div onClick={this.handleClick}>
                        {this.state.isToggleOn ? 'close' : 'delete'}
                        {this.state.isToggleOn && (
                            <div className="navigation">
                                <div className="delete-box">
                                    <h2> Are you sure you want to delete this? </h2>
                                    <div className="box-buttons">
                                        <div className="delete-button"onClick={this.handleDelete}><Link to="/idsort" style={{cursor: "pointer"}} ><h2> Delete </h2> </Link></div> 
                                        <div className="cancel-button"> <h2> No </h2> </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>   
                </div>

              

                <div className="note-container">
                    <div key={this.state.note.id}>
                        <h2>Note Name: {this.state.note.title} </h2>
                        <p>Text Body: {this.state.note.textBody}</p>
                        {/* <p>ID: {this.state.note.id}</p>
                        <p>Double_Underscore_V: {this.state.note.__v}</p>
                        <p>TAGS: {this.state.note.tags}</p> */}
                    </div>
                </div>
            </div>
        )
    } 
}

const mapStateToProps = () => {
    return {}
}

export default connect(mapStateToProps, { deleteNote })(NoteView)

//export default NoteView

//<div onClick={this.handleDelete}><Link to="/idsort" style={{cursor: "pointer"}} > delete </Link></div> 