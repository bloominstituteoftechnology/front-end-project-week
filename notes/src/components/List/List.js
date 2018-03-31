import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LinesEllipsis from 'react-lines-ellipsis';

import { fullNoteView } from '../../actions';
import './List.css';
import '../components.css';

class List extends Component {
    render() {
        return (
            <div className="appContainer">
                <div className="container">
                    <div className="sidebarContainer">
                        <h1>Lambda Notes</h1>
                        <Link to={`/`}>
                            <button className="buttons">View Your Notes</button>
                        </Link>
                        <Link to={`/create`}>
                            <button className="buttons">+ Create New Note</button>
                        </Link>
                    </div>
                    <div className="notesSectionContainer">
                        <h2>Your Notes:</h2>
                        <div className="listView">
                            {this.props.notes.map(note => {
                                return( <div className="Note" key={note.id}>
                                    <Link to={`/view/${note.id}`} style={ {color: "black"} }>
                                        <div className="noteTitle">{note.title}</div>
                                        <div>
                                            <LinesEllipsis
                                                text={note.text}
                                                maxLine="6"
                                                ellipsis=" ..."
                                                basedOn='words'
                                            />
                                        </div>
                                    </Link>
                                </div> );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes,
    }
}

export default connect(mapStateToProps, { fullNoteView })(List);