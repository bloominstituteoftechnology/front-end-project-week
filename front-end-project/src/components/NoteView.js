import React from 'react';
import { NavLink } from 'react-router-dom';
import { toggleModal, toggleModalBack, deleteNote } from '../actions'
import { connect } from 'react-redux'
import '../styles/NoteView.css'

const NoteView = props => {
    return (
        <div>
            {props.deleting ?
                <div className="modal-body">
                    <h2 className="modal-text"> Are you sure you want to delete this? </h2>
                    <div className="modalButtons">
                        {console.log('ID?', props.match.params.id)}
                        <button className="deleteButton" onClick={()=>props.deleteNote(props.match.params.id)}>Delete</button><button className="cancel" onClick={props.toggleModalBack}>Cancel</button>
                    </div>
                </div> : null}
            <div className="main-text" style={{background: props.deleting ? 'gray' : '#F3F3F3', opacity: props.deleting? '.4' : '1'}}>
                <div className="noteViewButtons">
                    <NavLink to="/edit">edit</NavLink>
                    <span onClick={props.toggleModal} className="delete"> delete </span></div>
                <div className="row yourNotes" onClick={props.toggleModalBack}>
                    <h3 style={{ textAlign: "left" }}> Note Name </h3>
                </div>
                <div onClick={props.toggleModalBack}>
                    <div className="note">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipscing elit.  Mauris egestas mauris sed nibh vulpatate, ac pharetra lacus aliquam.  Duis malesuada justo a iaculis sagittis.  Vestibulum ultrices ultricies arcu sit amet pharetra.  Duis et lectus arcu.  Morbi ornare dignissim dui, eu accumsan sapien lacinia et.  Maecenas ultricies, ante in accumsan tempor, tortor diam vulputate elit, id finibus enim magna in massa. Suspendisse vel accumsan nisi.  Vivamus elementum auctor ligula, at tempor nisl rutrum in.  Sed in eros luctus ligula porta efficitur eu non nibh.  Aliquam tellus ipsum, semper id cursus vel, posuere in dolor.  Phasellus maximus lacinia dolor eget laoreet.
                    </p>
                        <p>
                            Morbi pellentesque euismod venenatis.  Nulla ut nibh nunc.  Phasellus diam metus, blandit ac purus a, efficitur mollis velit.  ut egestas, ante at lobortis ullamcorper, neque odio fringilla odio, non mattis elit lacus ut velit.  Sed feugiat nibh vel molestie sollicitudin.  Duis tincidunt portitor sem, sit amet ultricies lacus pelientesque vel.  Aenean quis enim placerat, posuere orci ac, condimentum tellus.  Vivamus vitae sodales quam, eget ultricies lorem.  Nam pellenteque massa nisl, at pellentesque nisi faucibus vitae.  Curabitur sit amet turpis quam.  Duis eget metus elementum, solicitudin dui sed, accumsan dui.  Donec ut est orci.  Nunc fringilla purus sit amet posuere volutpat.  Fusce vitae lectus is neque facilisis laoreet eget non odio.  Praesent sed mauris porta, volutpat ante hendrerit, ultrices nisl.
                </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        deleting: state.notes.deleting,
        notes: state.notes.notes
    }
}

export default connect(mapStateToProps, { toggleModal, toggleModalBack, deleteNote })(NoteView)