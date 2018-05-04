import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap';
import './SideBar.css'


const SideBar = () => (
    <div>
            <div>
                <Button color="info" className="button" >
                    <Link to='/notes'>View Your Notes</Link>
                </Button>
            </div>
            <div>
                <Button color="info" className="button">
                    <Link to='/new'>+ Create New Note</Link>
                </Button>
            </div>
    </div>
)

export default SideBar
