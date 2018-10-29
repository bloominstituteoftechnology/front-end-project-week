import React from 'react';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';


 const SideMenu = () => {
 
 
//     function routeToItem(ev, item) {
//     ev.preventDefault();
//     props.history.push(`/item-list/${item.id}`);
//   }
  return (
    <div className="sideMenu">
     <h2> Lambda<br /> Notes</h2>
     <Link to="/">
       <button>View Your Notes</button>
     </Link>
     <Link to="/createNote">
      <button>+ Create New Notes</button>
     </Link>
     </div>
  
  );
}

// const StandardBut = styled.button`
// width : 90%;
// background :  #24B8BD;
// margin : 10px; `;


export default SideMenu;