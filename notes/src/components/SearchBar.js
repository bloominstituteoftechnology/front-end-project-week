import React from 'react';
import './SearchBar.css';


class SearchBar extends React.Component {
    constructor(props){
    super(props)
    this.state = {
        filteredNotes: [],
        searchInput: '',
        
    }}

    Search = event => {
        const notes = this.state.notes.filter(post => {
          if (post.username.includes(event.target.value)) {
            return post
          }
        })
        this.setState({ filteredNotes: notes })
      }
    
    

    
    
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