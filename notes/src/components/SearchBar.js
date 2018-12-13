import React from 'react';
import './SearchBar.css';


class SearchBar extends React.Component {
    constructor(props){
    super(props)
    this.state = {
        notes: props.notes, 
        placeholder: 'Search',
        
    }}

    

    
    
    render () {
        return (
            <div className = 'searchBarSection'>
                <form >
                <input className = 'searchBar' 
                    onKeyDown={this.props.search} 
                    type="text" 
                    placeholder=  "Search" />
                </form>
               
            </div>
      
    
        )}
    
};
 
export default SearchBar;