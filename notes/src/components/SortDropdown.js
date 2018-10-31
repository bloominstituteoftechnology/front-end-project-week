import React from "react";

import { Dropdown, DropdownHeader } from "../styles";

const SortDropdown = ({ sortAToZ, sortZToA, showDropdown }) => (
  <Dropdown style={showDropdown ? {display: "flex"} : {display: "none"}}>
    <DropdownHeader>Sort by...</DropdownHeader>
    <ul>
      <li onClick={sortAToZ}>Title: A-Z</li>
      <li onClick={sortZToA}>Title: Z-A</li>
    </ul>
  </Dropdown>
);

export default SortDropdown;
