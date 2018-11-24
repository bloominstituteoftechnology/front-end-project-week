import React from 'react';
import styles from '../css/SearchBar.css';

class SearchBar extends React.Component{
    //Why did this only work when I took the constructor and super out?
        state = {
            search : '',
        
    }
    inputHandler = (event) =>{
        this.setState({
            search: event.target.value
        })
    }
    submitHandler = (event) =>{
        event.preventDefault()
        this.props.searchNotes(this.state.search)
        this.setState({
            search : '',
        })
    }
    render(){
        return(
            <div className = 'search-container'>
                <form className = 'search-form' onSubmit = {(event)=>{this.submitHandler(event)}}>
                    <input 
                        className = 'search-input'
                        placeholder = 'Search Lambda Notes 🔍'
                        onChange = {this.inputHandler}
                        value = {this.state.search}
                        type = 'text'
                    />
                </form>
            </div>
        )
    }
}
export default SearchBar;