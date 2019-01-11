import React from 'react';
import { Link }  from 'react-router-dom';
import Button from './Button'
const Sidebar = props => {
    return(
        // smiply the side bar, nothing special here yet
        <div className="sidebar" >
            <h1>Lambda Notes</h1>
            <Link onClick={props.refresh} to='/'><Button >View Your Notes</Button></Link>
            <Link to='/create-new' ><Button >+ Create New Note</Button> </Link>
            {/* <form onSubmit={ev => {this.props.search(ev)}}>
        <input 
            onChange={ev => this.props.changeHandler(ev)}
            type="text"
            name="searchText"
            placeholder="Search Your Notes"
            />
            <br/>
        <button type="submit"> Search </button>
        </form> */}
        </div>
        
    )
}
export default Sidebar;