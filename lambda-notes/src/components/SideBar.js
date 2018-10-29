import React from 'react';
// import NoteCard from './Note';
// import { Link } from 'react-router-dom';
import {Button} from 'reactstrap';

const SideBar = () => {
        return (
            <div>
                <h1>Lambda</h1>
                <h1>Notes</h1>
                <div className="sidebar-buttons">
                <Button>View Your Notes</Button>
                <Button>+ Create New Note</Button>
                </div>
            </div>
        )
    }

export default SideBar;