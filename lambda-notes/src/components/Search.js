import React from 'react';

const Search = props => {
    return ( 

        
        <div className="input">
        <div className="search-input">
            type="text" 
            placeholder="Search" 
            onKeyDown={props.searchPosts}
            </div>
          </div>

    );
};
 

export default Search;