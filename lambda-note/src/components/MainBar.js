import React  from 'react';
import NoteList from './noteList';
const MainBar = () => {
    const mainBar = {
      backgroundColor : "#F3F3F3",
      height : "100vh",
      width : "75vw",

    }
    return (
        <div  className ="col-md-9" style = {mainBar}>
            <h1 className ="m-4 font-weight-bold" >Your Notes:</h1>
            <div className ="d-flex flex-row flex-wrap pl-4 " >
                <NoteList />
                <NoteList />
                <NoteList />
                <NoteList />
                <NoteList />
                <NoteList />
                <NoteList />
                <NoteList />
                <NoteList />
            </div>
        </div>
    )
}

export default MainBar;