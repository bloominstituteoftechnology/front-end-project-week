import React from 'react'
import {SearchInput} from '../../Styles/SearchBarStyles'

const SearchBar = props => {
    
    
    return (
        <SearchInput 
        placeholder="Search Notes..."
        type="text"
        name="filterTarget"
        value={props.filterTarget}
        onChange={props.filter}
        />
    )
}

export default SearchBar;