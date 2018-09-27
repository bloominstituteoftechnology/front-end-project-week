import React from 'react';
import styled from 'styled-components';

const PgeCtnr = styled.div`
    width: 100%;
    margin: auto;
`;

const NtsFrmHdr = styled.h2`
    margin-bottom: 2%;
    font-size: 1.6rem;
    text-align: center;
`;

const NtsFrmCtnr = styled.div`
    width: 65%;
    margin: 0 auto;
    text-align: center;
`;

const NtsStlIpt = styled.input`
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;

    :focus {
        outline: none;
    }
`;

const NtsStlTxa = styled.textarea`
    width: 100%;
    height: 150px;
    padding: 12px 20px;
    margin: 2% 0%;
    border: 2px solid #ccc;
    border-radius: 4px;
    resize: none;

    :focus {
        outline: none;
    }
`;

const NtsStlBtn = styled.button`
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    margin: 2% 0%;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;

    :hover {
        background-color: white;
        color: #4CAF50;
        cursor: pointer;
    }
`;

const NtsFrm = (props) => {
    const hdlsbmt = event => {
        event.preventDefault();
        if (props.ntsedtg) {
            props.hdledt();
        } else {
            props.hdlcrt(event);
        }
    }
  return (
    <PgeCtnr>
      <NtsFrmCtnr>
        <NtsFrmHdr>{props.ntsedtg ? "Edit" : "Create"}</NtsFrmHdr>
            <NtsStlIpt
                type="text"
                value={props.ntsidv.title}
                name="title"
                onChange={props.hdlchg}
                placeholder="Title"
            />
            <NtsStlTxa
                type="text"
                value={props.ntsidv.textBody}
                name="textBody"
                onChange={props.hdlchg}
                placeholder="Content"
            />
            <NtsStlIpt
                type="text"
                value={props.ntsidv.tags.join(", ")}
                name="tags"
                onChange={props.hdlchg}
                placeholder="Tags"
            />
            <NtsStlBtn onClick={hdlsbmt}>Submit</NtsStlBtn>
      </NtsFrmCtnr>
    </PgeCtnr>
  )
}

export default NtsFrm;