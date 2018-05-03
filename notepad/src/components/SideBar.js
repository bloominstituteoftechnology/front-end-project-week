import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap';


const SideBar = () => (
    <header>
        <nav>
            <div>
                <Button color="info" >
                    <Link to='/notes'>View Your Notes</Link>
                </Button>
            </div>
            <div>
                <Button color="info">
                    <Link to='/new'>+ Create New Note</Link>
                </Button>
            </div>
        </nav>
    </header>
)

export default SideBar
