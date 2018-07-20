import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DeleteNote = ({match, history,deleteNote, notes}) => {
    const deleteNT = notes.filter(note => note.id === Number(match.params.id))
    // console.log(editNT[0].text);
    return(
        <div className="notes">
            <input type="submit" className="form__submit" value="Delete" onClick={
                    (e) => {
                        deleteNote(e, deleteNT[0].id);
                        history.push('/');
                    }
            }/>
            <input type="submit" className="form__submit" value="Cancle" onClick={(e) => {
                history.push(`/note/${deleteNT[0].id}`);                
            }}/>
       </div>
    )
}

export default DeleteNote;