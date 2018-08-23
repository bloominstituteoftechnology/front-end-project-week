import React, { Component } from 'react';
import Note from './Note';
import { connect } from 'react-redux';
import { fetchNotes } from '../../actions/index';
// import { Grid, Col, Row  } from 'react-bootstrap';

class ViewList extends Component {

    shouldComponentUpdate = nextProps => {
        if(nextProps.notes !== this.props.notes) 
        return true;
        else return false;
    }

    componentDidMount = () => this.props.fetchNotes();

    render = () => {
        const { notes } = this.props;
        return (
            <div className="page view-list">
                <div>
                    <h2>Your Notes</h2>

                    <div className="notes">
                        {
                            notes.map((note, index) => {
                                const { id, title, text, completed, } = note;
                                return (
                                    <Note
                                        // key={note._id}
                                        id={id}
                                        index={index}
                                        note={notes}
                                        title={title}
                                        text={text} 
                                        completed={completed}
                                       // history={history}
                                         />
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
        notes: state.notesReducer
    }
}

export default connect(mapStateToProps, { fetchNotes })(ViewList);