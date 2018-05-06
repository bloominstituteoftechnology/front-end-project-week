import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap';
import './SideBar.css'


const SideBar = () => (
    <div>
            <div>
            <Link to='/notes'>
                <Button color="info" className="button" >
                    View Your Notes
                </Button>
            </Link>
            </div>
            <div>
            <Link to='/new'>
                <Button color="info" className="button">
                    + Create New Note
                </Button>
            </Link>
            </div>
    </div>
)

export default SideBar
