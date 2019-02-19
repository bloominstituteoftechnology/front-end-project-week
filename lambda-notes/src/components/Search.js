import React from 'react'
import './Search.css'

export default class Search extends React.Component {
    constructor(props){
        super(props); 
        this.state = {
          search: ''
        }
    }

    inputHandler = (event) => {
        event.preventDefault(); 
        this.setState({
            search: event.target.value
        })
        this.props.searchHandler(event.target.value)
    }

    render() {
        return(
            <div> 
              <form> 
                <input placeholder='Search' 
                       value={this.state.search}
                       onChange={this.inputHandler}
                       type='text'/> 
              </form>   
            </div> 
        )
    }
}