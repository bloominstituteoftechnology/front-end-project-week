import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const useInputValue = (initialValue) => {
    const [value,  setValue] = useState(initialValue);
    return {
        value,
        onChange: e => setValue(e.target.value)
    }
};

const FormContainer = styled.form`
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.2), 0 1px 5px 0 rgba(0,0,0,0.12);
  border: 1px solid rgb(218, 220, 224);
  border-radius: 8px;
  color: rgb(32, 33, 36);
  width: 472px;
  height: 46px;
  margin: 32px auto 16px auto;
  input {
    border: none;
    height: 46px;
    padding: 12px 16px;
    font-size: 14px;
    line-height: 20px;
    outline: none;
    border-radius: 8px;
    background: transparent;
    width: 100%;
    ::placeholder {
        color: #202124;
    }
  }
  .title {
    display: none;
  }
`;

const Action = styled.span`
    width: 24px;
    height: 24px;
    background-size: 24px 24px;
    opacity: 1;
    background-position: center;
    background-repeat: no-repeat;
    /* ${props => props.list && css`
        background-image: url('data:image/svg+xmlns;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/><path d="M18 9l-1.4-1.4-6.6 6.6-2.6-2.6L6 13l4 4z"/></svg>');
    `}
    ${props => props.drawing && css`
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBkPSJNMTguNjQgNC43NUwyMCA2LjExbC03Ljc5IDcuNzktMS4zNi0xLjM2IDcuNzktNy43OW0wLTJjLS41MSAwLTEuMDIuMi0xLjQxLjU5bC03Ljc5IDcuNzljLS43OC43OC0uNzggMi4wNSAwIDIuODNsMS4zNiAxLjM2Yy4zOS4zOS45LjU5IDEuNDEuNTkuNTEgMCAxLjAyLS4yIDEuNDEtLjU5bDcuNzktNy43OWMuNzgtLjc4Ljc4LTIuMDUgMC0yLjgzbC0xLjM1LTEuMzVjLS4zOS0uNC0uOS0uNi0xLjQyLS42ek03IDE0LjI1Yy0xLjY2IDAtMyAxLjM0LTMgMyAwIDEuMzEtMS4xNiAyLTIgMiAuOTIgMS4yMiAyLjQ5IDIgNCAyIDIuMjEgMCA0LTEuNzkgNC00IDAtMS42Ni0xLjM0LTMtMy0zeiIvPgo8L3N2Zz4K);
    `}
    ${props => props.image && css`
        background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBkPSJNMTkgM0g1Yy0xLjEgMC0yIC45LTIgMnYxNGMwIDEuMS45IDIgMiAyaDE0YzEuMSAwIDItLjkgMi0yVjVjMC0xLjEtLjktMi0yLTJ6bTAgMTZINVY1aDE0djE0em0tNS03bC0zIDMuNzJMOSAxM2wtMyA0aDEybC00LTV6Ii8+Cjwvc3ZnPgo=);
    `} */
`;

const NoteForm = ({onSubmit, history, id=false}) => {
    const title = useInputValue('');
    const body = useInputValue('');

    return (
        <FormContainer
            onSubmit={e => {
                e.preventDefault();
                if(id) {
                    onSubmit(title.value, body.value, id, history);
                    return;
                }
                onSubmit(title.value, body.value, history);
            }}
        >
            <input {...title} placeholder='Title' className="title" required/>
            <div className="initial-input">
                <input {...body} placeholder='Take a note...' required/>
                <div className='note-actions'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/><path d="M18 9l-1.4-1.4-6.6 6.6-2.6-2.6L6 13l4 4z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M18.64 4.75L20 6.11l-7.79 7.79-1.36-1.36 7.79-7.79m0-2c-.51 0-1.02.2-1.41.59l-7.79 7.79c-.78.78-.78 2.05 0 2.83l1.36 1.36c.39.39.9.59 1.41.59.51 0 1.02-.2 1.41-.59l7.79-7.79c.78-.78.78-2.05 0-2.83l-1.35-1.35c-.39-.4-.9-.6-1.42-.6zM7 14.25c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5-7l-3 3.72L9 13l-3 4h12l-4-5z"/>
                    </svg>

                </div>
            </div>
        </FormContainer>
    );
}

export default NoteForm;