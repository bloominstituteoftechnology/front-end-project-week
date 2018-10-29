import React from 'react';


 const SideMenu = () => {
 
 
//     function routeToItem(ev, item) {
//     ev.preventDefault();
//     props.history.push(`/item-list/${item.id}`);
//   }
  return (
    <div className="sideMenu">
     <h2> Lambda<br /> Notes</h2>
     <button>View Your Notes</button>
     <button>+ Create New Notes</button>
     </div>
  
  );
}

export default SideMenu;