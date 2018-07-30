import React, { Component } from 'react';
import Note from './Note';
import { connect } from 'react-redux';
import { fetchNotes } from '../../actions/index';
// import { Grid, Col, Row  } from 'react-bootstrap';

class ViewList extends Component {

    componentDidMount = () => this.props.fetchNotes();

    render = () => {
        const { notes, history } = this.props;
        return (
            <div className="page view-list">
                <div>
                    <h2>Your Notes</h2>

                    <div className="notes">
                        {
                            notes.map((note, index) => {
                                const { _id, title, text, completed } = note;
                                return (
                                    <Note
                                        key={note._id}
                                        note={note} />
                                );
                            }
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes
    }
}

export default connect(mapStateToProps, { fetchNotes })(ViewList);