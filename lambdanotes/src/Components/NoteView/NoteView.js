import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import DeleteNote from '../DeleteNote/DeleteNote';
import './index.css';

const mapStateToProps = (state) => {
    return {
        notesArray: state
    }
}

class NoteView extends Component {
    constructor() {
        super()
        this.state = {
            //sets display of modal by default to false. Matched is initially set to an empty array. 
            displayDelete: false,
            matched: [],
        }
    }
    //matched prop is the filter function, and it finds the criteria listed by console logging, and seeing the info listed for route id. 
    //matched returns an array of one object, the note with the specified Id. 
    componentWillMount() {
        let routeId = this.props.match.params.id;
        let matched = this.props.notesArray.filter((item) => item._id === routeId);
        this.setState({ matched })
    }
    //TOGGLE LOGIC - will flip true or false depending on what is clicked, it will show the opposite.
    showModal = () => {
        this.setState({ displayDelete: !this.state.displayDelete })
    }

    render() {
        //console.log('NoteView Props', this.props provided the path for the 'match' information)
        return (
            <div className='noteView_container'>
                <div className='noteView_topContent'>
                    <h3 className='content_header'>
                        {this.state.matched[0].title}
                    </h3>
                    <div>
                        <Link to={`/edit/${this.props.match.params.id}`} className='edit_delete'>edit</Link>
                        <a
                            href='#'
                            className='edit_delete'
                            onClick={this.showModal}
                        >
                            delete
                        </a>
                    </div>
                </div>
                <div className='notesList'>
                    <p className=''>
                        {this.state.matched[0].body}
                    </p>
                </div>
                <DeleteNote
                    toggle={this.state.displayDelete}
                    showModal={this.showModal}
                    toDelete={this.state.matched[0]._id}
                    history={this.props.history}
                />
            </div>
        );
    }
}

export default connect(mapStateToProps, {/*Actions Here*/ })(NoteView);