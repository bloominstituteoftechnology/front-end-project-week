import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
    width: 100%;
    margin: auto;
`;

const NoteContainer = styled.div`
    width: 65%;
    margin: 0 auto;
    text-align: center;
`;

const NoteContentContainer = styled.div`
    padding: 3%;
    margin: 2%;
`;

const NoteHeader = styled.h1`
    margin: 5%;
    font-size: 2rem;
    font-weight: 700;
`;

const NoteContent = styled.p`
    margin: 5%;
    font-size: 1.6rem;
`;

const NoteEdit = styled.button`
    background-color: #008CBA; /* Blue */
    border: none;
    color: white;
    padding: 15px 32px;
    margin: 2%;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;

    :hover {
        background-color: white;
        color: #008CBA;
        cursor: pointer;
    }
`;

// const NtsIdvRmv = styled.button`
//     background-color: #f44336; /* Red */
//     border: none;
//     color: white;
//     padding: 15px 32px;
//     margin: 2%;
//     text-align: center;
//     text-decoration: none;
//     display: inline-block;
//     font-size: 16px;

//     :hover {
//         background-color: white;
//         color: #f44336;
//         cursor: pointer;
//     }
// `;

 const Note = (props) => {
     console.log(props);
    console.log(props.note);
    //  const hdldltfn = () => {
    //      props.hdldltnt(props.nts_idv._id);
    //      props.history.push("/nts")
    //  };

     if (props.notes_fetching || props.notes_array.length === 0) {
         return <h2>Loading...</h2>
     }
  return (
      <PageContainer>
        <NoteContainer>
            <NoteContentContainer>
            <NoteHeader>{props.note.title}</NoteHeader>
            <NoteContent>{props.note.textBody}</NoteContent>
            </NoteContentContainer>
            <NoteEdit onClick={(event) => {
                event.preventDefault();
                props.redirectForm(event, props.note.id);
            }}>Edit</NoteEdit>
            {/* <NtsIdvRmv onClick={hdldltfn}>Remove</NtsIdvRmv> */}
        </NoteContainer>
    </PageContainer>
  )
}

export default Note;