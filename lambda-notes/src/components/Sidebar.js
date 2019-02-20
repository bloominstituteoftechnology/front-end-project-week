import React from 'react';
import { Link } from 'react-router-dom';
import { Button , Input} from 'reactstrap';
import SearchForm from './SearchForm';

const SideBar = () => {
    return (
        <div className="aside">
            <h1>Lambda Notes</h1>
            <Button color="info">
                <Link to={'/'}>
                    View Your Notes
                </Link>
            </Button>
            <Button color="info">
                <Link to={'/notes/create'}> + Create Your Note</Link>
            </Button>
            <SearchForm />
        </div>
    )
}

export default SideBar;