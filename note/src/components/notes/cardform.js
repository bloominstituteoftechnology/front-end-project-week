import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardForm = ({title, text, onSubmit, handleInput}) => {
    return (
        <form className="form" onSubmit={onSubmit}>
            <input type="text" name="title" className="form__title"
            value={title}
            onChange={handleInput}
            placeholder = {title ? title : 'Note title' }
            />
            <br/>
            <textarea name="text" className="form__content" cols="60" rows="25"
            value={text}
            onChange={handleInput}
            placeholder = {text ? text : 'Note content' }
            >
            </textarea>
            <input type="submit" value="Save" className="form__submit" onClick={onSubmit}/>
        </form>
    )
}
export default CardForm;
