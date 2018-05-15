import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Sidebar.css'


const Sidebar = props => (
  <div className="Sidebar">
    <h3>Lambda Notes</h3>
    <div className="sidebarLinks">
      <div>
        <Link to="/"><button className="mainBtn">View Your Notes</button></Link>
      </div>
      <div>
        <Link to="/create"><button className="mainBtn">+ Create New Note</button></Link>
      </div>
    </div>
  </div>
)

export default Sidebar