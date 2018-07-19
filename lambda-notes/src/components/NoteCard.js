import React from "react";
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Note from './Note';

const Notecont = styled.div`

    background-color: #F3F3F3;
    height:100vh;
    width:660px;
    border: solid 1px #979797
`;
const Notebod = styled.div`
margin-top 15px;
margin-bottom 15px;
display: flex;
    justify-content: space-around; 
    flex-wrap:wrap;
`;
const SmallNote = styled.div`

    background-color: white;
    height:190px;
    width:190px;
    border: solid 1px #979797
`;
const StyledLink = styled(Link)`
text-decoration: none;
  color: black;
  
`
const NoteTitle = styled.h2`
display: flex;
    justify-content: flex-start;
    margin-left: 15px;
    margin-right: 15px;
    
    border-bottom: solid 2px #000;
    
    padding-bottom: 3px;
    color: #4A4A4A;
`
const NoteBod = styled.p`
display: flex;
    justify-content: flex-start;
    margin-left: 15px;
    color: #4A4A4A;
  
`


const NoteCard = (props) => {
    return (
        <Notecont>
            <Notebod className='Note'>
                {props.notes.map(note => {
                    return (
                        <div>
                            <Link to={`/note/${note.id}`}>


                                <p>{note.notetitle}
                                </p>
                                <p>{note.notebod}
                                </p>
                            </Link>
                        </div>
                        // <Note

                        //   key={note.id}
                        //   note={note}
                        //   notetitle={note.notetitle}
                        //   notebod={note.notebod}
                        // />
                    )
                })}
                {/* <StyledLink to="/note"> <SmallNote>
    <NoteTitle>Title</NoteTitle>
    <NoteBod>Note</NoteBod>
      </SmallNote> </StyledLink> */}
                {/* <StyledLink to="/note"> <SmallNote>
    <NoteTitle>Note Title</NoteTitle>
    <NoteBod>Lorem Ipsum</NoteBod>
      </SmallNote> </StyledLink> 
      <StyledLink to="/note"> <SmallNote>
    <NoteTitle>Note Title</NoteTitle>
    <NoteBod>Lorem Ipsum</NoteBod>
      </SmallNote> </StyledLink> */}
            </Notebod>
        </Notecont>

    )
}

    ;

// class NoteCard extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             notes: [
//                 {
//             notetitle: "Note Title",
//             notebod:"lorem ipsum lorem impsum" ,
//             id: 123, 
//         },
//     ],
//     note: ''
// }
// }
// addNote = e => {
//     e.preventDefault();
//     const notes = this.state.notes.slice();
//     notes.push({ notetitle: this.state.notetitle, notebod: this.state.notebod,  id: Date.now() });
//     this.setState({ notes, note: '' });
//   };

//   changeNote = e => this.setState({ [e.target.name]: e.target.value });


// render () {
//     return (
//         <Notecont>
//         <div>Your Notes:</div>    
//       <Notebod className = 'Note'>

//       <StyledLink to="/note"> <SmallNote>
//       <NoteTitle>{this.state.notetitle}</NoteTitle>
//       <NoteBod>Lorem Ipsum</NoteBod>
//         </SmallNote> </StyledLink>

//    </Notebod>
//    </Notecont>

//     );
// }
// }
export default NoteCard;
