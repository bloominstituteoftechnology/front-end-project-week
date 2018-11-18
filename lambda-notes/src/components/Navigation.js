import React from 'react'

const Navigation = () => {
   
    return (
      <nav className="navbar navbar-expand-sm navbar-light mb-3 py-0">
        <div className="container">
            <a href="/" className="navbar-brand">Lambda Notes</a>
        </div>
        
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">

            <li className="nav-item">Create New</li>

            <li className="nav-item">Login</li>
            
            <li className="nav-item">About</li>
          </ul>
        </div>
      </nav>
          
    )
}

export default Navigation;
