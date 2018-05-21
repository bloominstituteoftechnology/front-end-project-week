import React from 'react';
// import './navig.css';

const Navigation = () => {
    
    return (
    
    <div className="wrapper">

      <nav id="sidebar">
        <div className="sidebar-header">
            <h3>Lambda Notes</h3>
        </div>
        <ul className="list-unstyled components">
            <li className="active"><button>View Your Notes</button></li>
            <br />
            <li><button>+ Create new Note</button></li>
        </ul>
      </nav>

    </div>

    )
}
 
export default Navigation;