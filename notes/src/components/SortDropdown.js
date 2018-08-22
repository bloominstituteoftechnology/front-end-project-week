import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


const SortDropdown = ({ dropdown, toggle, sortByLatest, sortByOldest, sortAlphabetically }) => {
  return (
    <Dropdown isOpen={dropdown} toggle={toggle} className="dropdown">
      <DropdownToggle caret color="info">
        Sort by...
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Options</DropdownItem>
        <DropdownItem divider />
        <DropdownItem onClick={sortByLatest}>Latest</DropdownItem>
        <DropdownItem onClick={sortByOldest}>Oldest</DropdownItem>
        <DropdownItem onClick={sortAlphabetically}>A-Z (by title)</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default SortDropdown;