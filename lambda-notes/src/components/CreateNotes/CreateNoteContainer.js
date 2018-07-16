import React from 'react';
import CreateNoteBody from './CreateNoteBody';
import LambdaLeftDiv from '../ViewNotes/LambdaLeftDiv'

const CreateNoteContainer = (props) => {

        return(
                <div className="create-note-body">
                <LambdaLeftDiv />
		<CreateNoteBody  addNoteHandler={props.addNoteHandler} />
                </div>
        );

};


export default CreateNoteContainer;
