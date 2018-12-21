import React from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
// import styled from 'styled-components';

export default class Note extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: null,
            title: '',
            textBody: '',
            show: false
        }
    }

    // componentDidMount() {
    //     const note = this.state.notes.find(
    //         note => `${note._id}` === this.props.match.params.id
    //     );
    //     this.setState(note);
    // }

    componentDidMount() {
        axios
            .get(`/note/${this.props.match.params.id}`)
            .then(response => {
                this.setState(() => ({ notes: response.data }))
            })
            .catch(error => {
                console.error('Server Error', error)
            });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.title === '' || this.props.match.params.id !== prevProps.match.params.id) {
            const note = this.props.notes.find(
                note => `${note._id}` === this.props.match.params.id
            );
            this.setState(note);
        }
    }

    // getNote = event => {
    //     event.preventDefault();
        
    //     const content = {
    //         title: this.state.title,
    //         textBody: this.state.textBody,
    //         tag: this.state.tag
    //     };

    //     axios
    //         .get(`/note/${note._id}`)
    //         .then(response => {
    //             this.setState(() => ({ note: response.data }))
    //         })
    //         .catch(error => {
    //             console.error('Server Error', error)
    //         });
    // }

    render() {
        return(
            <div className="note-viewer">
                <h2>{this.state.title}</h2>
                <p>{this.state.textBody}</p>
            </div>
        );
    }
}

// function ViewedContents({ note }) {
//     const { tags, title, textBody } = note;
//     return(
//         <Link to={`/notes/${note._id}`} className="note-link">
//             <div className="note-card">
//                 <h2>{title}</h2>
//                 <div className="note-content">
//                     {textBody}
//                 </div>
//                 <div className="note-tags">
//                     {tags}
//                 </div>
//             </div>
//         </Link>
//     );
// }