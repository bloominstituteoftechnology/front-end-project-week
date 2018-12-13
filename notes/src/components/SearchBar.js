import React from 'react';




class SearchBar extends React.Component {
    constructor(props){
    super(props)
    this.state = {
        note: props.note, 
        placeholder: 'Search',
             
    }

    }
        
    render () {
        return (
            <div>
                <form className = 'searchBar'>
                <input onKeyDown={this.props.search} type="text" placeholder="Search" />
                </form>
            </div>

        )
      
    
    }
    
}
 
export default SearchBar;