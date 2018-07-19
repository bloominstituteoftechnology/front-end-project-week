import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Sidebar from './Sidebar';
// import Modal from './Modal';
import '../styles/ViewNote.css';
// import Sidebar from './Sidebar';


class ViewNote extends React.Component {
    constructor(props) {
    super(props)
    this.state = {
        note: null
        // modal: false,
    }
}
    
 componentDidMount() {
     console.log(this.props);
 }
//     const id = this.props.match.params.id;
//     this.fetchNote(id);
// }

// fetchNote = id => {

// }

// componentWillReceiveProps(newProps){
//     if(this.props.match.params.id !== newProps.match.params.id){
//       this.fetchNote(newProps.match.params.id);
//     }
//   }
    // toggleModal = () => {
    //     this.setState({ modal: this.state.modal });
    // }

    // handleDeleteNote = () => {
    //     this.toggleModal();
    //     this.props.deleteNote(this.props.singleNote.title);
    //     this.props.history.push('/');
    // }

    render() {
    return (
            <div>
                {/* <Sidebar /> */}
                {/* <Link to={`editNote/${this.props.match.params.id}`}>edit</Link> */}
                {/* <Link>delete</Link> */}
            <div className="Viewnote">
            <h3>{this.props.location.state.title}</h3>
            <p>{this.props.location.state.body}</p>    
            </div>
            </div>
        )
    }
}


export default ViewNote;