import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import CardComponent from '../Components/CardComponent';


class NoteView extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            note:null,
            noteView: true
        }
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        this.fetchNote(id);
    }

    fetchNote = id => {
        axios
        .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
        .then(res => {
            console.log(res.data)
            this.setState({
                note: res.data
            })
        })
        .catch(err => {
            console.error(err)
        })
    }
    render(){

        if(!this.state.note){
            return <div>Loading</div>
        }

        return(
            <div>
                <div>
                    <ul>
                        <li>edit</li>
                        <li>delete</li>
                    </ul>
                </div>
                <CardComponent note={this.state.note} noteView={this.state.noteView}/>
            </div>
        )
    }
}

export default NoteView;