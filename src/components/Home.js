import React from 'react';
import './Note.css';

function Home(props) {
    const routeToNotes = event => {
        event.preventDefault();
        props.history.push('/notes');
    };

    return (
        <div>
            <img className = "note-image" src = "#" alt = "note-hub" />
            <button onClick={routeToNotes}>To The Notes!</button>
        </div>
    )
}

export default Home;