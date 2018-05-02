import React from 'react'
import { Link } from 'react-router-dom'


const SideBar = () => (
    <header>
        <nav>
            <div>
                <button className="Button1">
                    <Link to='/notes'>View Your Notes</Link>
                </button>
            </div>
            <div>
                <button className="Button1">
                    <Link to='/new'>+ Create New Note</Link>
                </button>
            </div>
        </nav>
    </header>
)

export default SideBar
