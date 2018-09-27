import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Sidebar from './Sidebar';

class SingleNoteCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fetchedNote: {
                _id: "",
                title: "",
                textBody: ""
            }
        }
    }

    componentDidMount() {
        const _id = this.props.match.params._id;
        this.props.fetchSingleNote(_id);
    }

    // return(
    //     <Fragment>
    // <div className="single-note">
    //     <div className="edit-delete">
    //         <a className="plain-button" onClick={event => {
    //             event.preventDefault();
    //             console.log("clicked open update");
    //             this.props.openUpdateForm(event, this.state.note._id)
    //         }}>edit</a>
    //         <a className="plain-button" onClick={event => {
    //             this.props.showModal(event, this.state.note._id)
    //         }}>delete</a>

    //     </div>
    //     <div className="note-info-wrapper">
    //         <h1>{this.state.note.title}</h1>
    //         <p>{this.state.note.textBody}</p>

    //     </div>
    // </div>

    // <Modal show={this.props.show}>

    //     <div className="modal-content">
    //         <p>Are you sure you want to delete this note?</p>
    //         <div className="modalButtons">
    //             <button className="blueButton" onClick={this.props.showModal}>No</button>
    //             <button className="redButton" onClick={this.deleteNote}>Delete</button>
    //         </div>
    //     </div>

    // </Modal>

    //     </Fragment >
    // )

    render() {
        return (
            <div className="page-container">
                <Sidebar />
                <div className="section-container">
                    <div className="buttons">
                        <Link to={{ pathname: `/edit/${this.props.note._id}` }}>
                            <p>edit</p>
                        </Link>
                        {/* <Link to={{ pathname: `/delete/${this.props.note._id}` }} > */}
                            <p onClick={() => this.props.deleteNote(this.props.note._id)}>Delete Note</p>
                        {/* </Link> */}
                    </div>
                    <div className="single-note">
                        <h1>{this.props.note.title}</h1>
                        <p>{this.props.note.textBody}</p>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        note: state.singleFetchedNote
    }
}

export default connect(mapStateToProps, {})(SingleNoteCard);