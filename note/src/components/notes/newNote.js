import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CardForm from './cardform';
const NewNote = ({addnote, handleInput, text, title, history}) => {
    return (
        <div className="notes">
            <h2>Create New Note:</h2>
            <CardForm onSubmit={(e) => {
                addnote(e)
                history.push('/');
            }}
            handleInput={handleInput} text={text} title={title}/>
        </div>
    )
}
export default NewNote;