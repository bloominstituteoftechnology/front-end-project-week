import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import { 
    ButtonsContainer, 
    StyledButton, 
    MassDeleteButton,
    SVGIcon,
    TitleInputContainer,
    InitialInput,
    FormContainer,
    NoteActions
} from '../styles';

const NoteForm = ({onSubmit, history, deleteChecked, checkedNotes}) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    let titleRef = null;
    let bodyRef = null;
    let closeRef = null;
    let addRef = null;

    const blurAll = () =>  {
        titleRef.blur()
        bodyRef.blur()
        closeRef.blur()
        addRef.blur()
    }

    return (
        <div>
            <Route 
                path="/"
                exact
                render={props =>
                    <FormContainer addForm="true"
                        onSubmit={e => {
                            e.preventDefault();
                            onSubmit(title, body, history);
                            setTitle('');
                            setBody('');
                            blurAll();
                        }}
                    >
                        <TitleInputContainer>
                            <input tabiidex="2" ref={ref => titleRef = ref} value={title}  onChange={e => setTitle(e.target.value)} placeholder='Title' className="title" required/>
                            <SVGIcon pin="true"/>
                        </TitleInputContainer>
                        <InitialInput>
                            <textarea tabidex="1" ref={ref => bodyRef = ref} value={body}  onChange={e => setBody(e.target.value)}  placeholder='Take a note...' className="text-body" required/>
                            <NoteActions className='note-actions'>
                                <SVGIcon checkBox="true"/>
                                <SVGIcon brush="true"/>
                                <SVGIcon image="true"/>
                            </NoteActions>
                        </InitialInput>
                        <ButtonsContainer className="button-container">
                            <StyledButton ref={ref => closeRef = ref} type="button" onClick={() => blurAll()}>Close</StyledButton>
                            <StyledButton ref={ref => addRef = ref} type="submit">Add</StyledButton>
                        </ButtonsContainer>
                    </FormContainer>  
                }
            />

            <Route 
                path="/select"
                exact
                render={props => 
                    <FormContainer>
                        <MassDeleteButton 
                            type="button"
                            amountChecked={checkedNotes.length}
                            onClick={e => {
                                e.preventDefault();
                                if (!checkedNotes.length) return;
                                deleteChecked(checkedNotes);
                                history.push('/');
                            }}
                        >Delete Selected</MassDeleteButton>
                    </FormContainer>}
            />
        </div>
    );
}

export default NoteForm;
