import React from 'react';
import { Input } from 'reactstrap';

const Search = (props) => {
    return(
                <Input 
                    type="text"
                    name="title"
                    placeholder="Search notes..."
                    bsSize="md"
                    value={props.search}
                    onChange={props.handleSearch}
                    style={{maxWidth: '400px', width: '100%', margin: '0 auto'}}
                />
            
    )
}

export default Search;