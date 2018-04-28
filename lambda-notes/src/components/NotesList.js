import React from 'react';
import { connect } from 'react-redux';
import { Fragment } from 'react';

const NotesList = state => {
    return (
        <div>
            <ul>
                {console.log(state.notes.notes)}
                {state.notes.notes.map((note, i)=>{
                    return (
                        <Fragment key={i}>
                            <li key={note._id}>
                                <p>{note.title}</p>
                                <p>{note.content}</p>
                            </li>
                        </Fragment>
                    );
                })};
            </ul>    
        </div>        
    );
};

const mapStateToProps = state => {
    return {
        notes: state.notes,
    };
};

export default connect(mapStateToProps)(NotesList);