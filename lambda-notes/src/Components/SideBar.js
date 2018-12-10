import React from 'react'; 

const SideBar = props => {
  return (
    <div className='side-bar'>
      <h1>Lambda Notes</h1>
      <button>View your Notes</button>
      <button>+ Create New Note</button>
    </div>
  )
}

export default SideBar;