import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

// const NoteCardContainerStyledDiv = styled.div`
//     width:100px;
//     height:100px;
//     overflow:hidden;
//     text-overflow:ellipsis;
//     white-space:nowrap;
//     boder:1px solid black;
//     padding:5px;
// `

const NoteCardContainerStyledDiv = styled.div`
    width:100px;
    height:100px;
    overflow:hidden;
    boder:2px solid black;
    `
    // overflow:hidden;
    // text-overflow:ellipsis;
    // white-space:nowrap;
    // boder:1px solid black;
    // padding:5px;


const NoteCardTitleStyledHeading = styled.h2`
    font-size:22px;
    font-weight:bold;
`

const NoteCardContentStyledP = styled.p`
    font-size:18px;
`

// const NoteCard = props => {
//     return (
//         <div>
//             <Link to={"/note"}>
//                 <div style={{ border: "1px solid green", margin: "10px" }}>
//                     TITLE:{props.noteEntry.title}
//                     <br />
//                     TEXT: {props.noteEntry.textBody}
//                 </div>
//             </Link>
//         </div>
//     );
// }


const NoteCard = props => {
    return (
        <div>
            <Link to={"/note"}>
                <NoteCardContainerStyledDiv>
                {/* <div style={{ border: "1px solid green", margin: "10px" }}> */}
                    TITLE:{props.noteEntry.title}
                    <br />
                    TEXT: {props.noteEntry.textBody}
                {/* </div> */}
                </NoteCardContainerStyledDiv>
            </Link>
        </div>
    );
}

export default NoteCard; 