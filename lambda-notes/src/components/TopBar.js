import React from 'react';
import SearchBar from './SearchBar';
import SortBar from './SortBar';


const TopBar = props => {
  return (
    <div className='top-bar'>
    <SearchBar handleInput={props.handleInput} search={props.search}/>
    <SortBar sortByTitle={props.sortByTitle} sortByLength={props.sortByLength}/>
    </div>
  )
}
export default TopBar;
