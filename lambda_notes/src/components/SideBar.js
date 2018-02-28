import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Sidebar extends Component {
    render() {
        return(
            <div className="Menu">
                <h1 id="title">Lambda<br/> Notes</h1>
                    <Link to='list'>
                        <button><b>View Your Notes</b></button><br/>
                    </Link>
                    <Link to='/createnote'>
                        <button><b>+ Create New Note</b></button>
                    </Link>
            </div>
        )
    }
}

export default Sidebar;