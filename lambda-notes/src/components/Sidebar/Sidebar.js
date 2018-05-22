import React from 'react';
import Header from '../Header';
import Button from '../Button';
const Sidebar = () => {
  return (
    <div className="sidebar col-2 col-md-3">
      <Header title="Lambda Notes"/>
      <Button type="primary" title="View Your Notes" link="/"/>
      <Button type="primary" title="+ Create New Note" link="/create-new"/>
    </div>
  );
}

export default Sidebar;