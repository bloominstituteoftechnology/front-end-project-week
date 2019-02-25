import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import SearchForm from './SearchForm';

const SideBar = props => {
    return (
        <div className="aside">
            <h1>Lambda Notes</h1>
            <Button onClick={props.fetchNotes} color="info">
                {/* <Link to={'/'}> */}
                    View Your Notes
                {/* </Link> */}
            </Button>
            <Button color="info">
                <Link to={'/notes/create'}> + Create Your Note</Link>
            </Button>
            <Button color="info" onClick={() => props.sortNotes(props.notes)}>
                Sort A-Z
            </Button>
            <SearchForm searchTerm={props.searchTerm} />
        </div>
    )
}

export default SideBar;