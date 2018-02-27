import React from 'react';

const Panel = (props) => {  
  const handleClickForCreate = () => {
    alert(props.showAddWin)
  }

  return (
    <div className="Panel">
      <p>Lambda Notes</p>
      <button>View Your Notes</button>
      <button onClick={() => handleClickForCreate()}>+ Create New Note</button>
    </div>
  );
};

export default Panel;
