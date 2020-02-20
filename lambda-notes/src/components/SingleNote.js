import React, { Component } from 'react';

import axios from 'axios';
import { Link } from "react-router-dom";
import styled from 'styled-components';

import '../CSS/Note.css'


import Notes from './Notes'
import Modal from './Modal'


const MainDiv = styled.div`
    display:flex;
    flex-direction:column;
    flex-wrap:wrap;
`
const SingleNoteDiv = styled.div`
    width: 800px;
`


export default class SingleNote extends Component {
    // console.log(this.props)
    constructor(props) {
        super(props);
        this.state = {
            note: [],
            isOpen: false
            
        }
    
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        // console.log(id)
        this.fetchNote(id)
    }
    
    returnHome = () => {
        this.props.history.push("/")
    }

    toggleModal = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    fetchNote = id => {
        axios
            .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
            .then(response => {
                // console.log(this.state)
                this.setState({ note: response.data })
                // this.props.updateNote(this.state)
               
            })
            .catch(error => {
                console.log(error)
            })
    }

    deleteNote = () => {
        const id = this.props.match.params.id
        // console.log(id)
        // console.log(this.state)
        axios
            .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
            .then(response => 
                // console.log(response))
                // this.state.history.push('/'))
                // window.location.href="/"
                this.returnHome()

                )

            .catch(error => console.log(error))
    }


    render() {
        if(this.state.note.length===0) {
            return <div>Loading...</div>
        }
        // console.log(this.state)
        return(
            <MainDiv>
                <div>
                    <Modal show={this.state.isOpen} onClose={this.toggleModal} delete={this.deleteNote}>
                   
                    </Modal>
                </div>

               <div className="EditDeleteButtonDiv">
                    <div>
                        <Link to={`/EditNote/${this.props.match.params.id}`}>
                            <button className="EditDeleteButton">Edit</button>
                        </Link>
                
                        <button className="EditDeleteButton" onClick={this.toggleModal}>Delete</button>
                    </div>
               </div>
                <SingleNoteDiv>
                    <Notes
                        title = {this.state.note.title}
                        textBody = {this.state.note.textBody}
                        />
                </SingleNoteDiv>
            </MainDiv>
        )
    }
}