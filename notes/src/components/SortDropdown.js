import React from "react";

import { Dropdown, DropdownHeader } from "../styles";

const SortDropdown = ({ sortAToZ, sortZToA, sortByDateOldest, sortByDateNewest, showDropdown }) => (
  <Dropdown style={showDropdown ? {display: "flex"} : {display: "none"}}>
    <DropdownHeader>Sort by...</DropdownHeader>
    <ul>
      <li onClick={sortAToZ}>Title: A-Z</li>
      <li onClick={sortZToA}>Title: Z-A</li>
      <li onClick={sortByDateOldest}>Date Created: Least to most recent</li>
      <li onClick={sortByDateNewest}>Date created: Most to least recent</li>
    </ul>
  </Dropdown>
);

export default SortDropdown;
