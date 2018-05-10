import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import '../App.css';
import { getNote, deleteNote } from '../Action';

// grey out background on modal entrance

const backgroundStyle = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 50
};

// modal style

const modalStyle = {
    backgroundColor: '#fff',
    borderRadius: 5,
    border: '5 black',
    maxWidth: 500,
    mindHeight: 300,
    marginLeft: 450,
    padding: 30,
    fontSize: 20,
    border: '3px solid grey'
};



class Note extends Component {

    state = {
        viewModal: false,
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getNote(id);
    }

    showModal = e => {
        this.setState({ viewModal: true })
    }

    hideModal = e => {
        this.setState({ viewModal: false })
    }

    handleDelete = (id) => {
        this.setState({ viewModal: false })
        this.props.deleteNote(id);
        this.props.history.push('/');
    }

    

    render() {
        return (
            <div className="note-container">

                <button onClick={this.showModal} className="feature-button">delete</button>

                <Link to={'/EditNote'}>
                    <button className="feature-button">edit</button>
                </Link>
                
                <h2 className="note-title"> {this.props.note.title} </h2>
                <p className="note-content"> {this.props.note.content} </p>

                {/* Modal component */}

                { this.state.viewModal ?
                    <div style={backgroundStyle}>
                        <div style={modalStyle}>
                            <p>Are you sure you want to delete this?</p>
                            <button onClick={() => {this.handleDelete(this.props.note.id) }} className="delete-button">Delete</button>
                            <button onClick={this.hideModal} className="button">Exit</button>
                        </div>
                    </div> : null }
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        note: state.note,
    }
}

export default connect(mapStateToProps, { getNote, deleteNote })(Note);