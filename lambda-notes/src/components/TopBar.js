import React from 'react';
import SearchBar from './SearchBar';
import SortBar from './SortBar';


const TopBar = props => {
  return (
    <div className='top-bar'>

    <SortBar sortByTitleAsc={props.sortByTitleAsc} sortByTitleDes={props.sortByTitleDes} sortByLengthAsc={props.sortByLengthAsc}
    sortByLengthDes={props.sortByLengthDes}
    />
    <SearchBar handleInput={props.handleInput} search={props.search}/>
    </div>
  )
}
export default TopBar;
