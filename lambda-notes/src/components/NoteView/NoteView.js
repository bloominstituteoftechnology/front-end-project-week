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
            displayDelete: false,
            matched: [],
        }
    }

    componentWillMount() {
        let routeId = this.props.match.params.id;
        let matched = this.props.notesArray.filter((item) => item._id === routeId);
        this.setState({ matched })
    }

    showModal = () => {
        this.setState({ displayDelete: !this.state.displayDelete })
    }

    render() {
        //console.log('NoteView Props', this.props)
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