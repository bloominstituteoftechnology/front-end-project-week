import React  from 'react';
import NoteList from './noteList';
const MainBar = (props) => {
    const mainBar = {
      backgroundColor : "#F3F3F3",
      height : "100vh",
      width : "75vw",

    }
    return (
        <div  className ="col-md-9" style = {mainBar}>
            {props.children}
        </div>
    )
}

export default MainBar;