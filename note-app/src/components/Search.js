import React from 'react';
import SideBar from './side-bar'
import {Link, Route} from 'react-router-dom'
import SearchFullNote from './SearchFullNote'

class Search extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            search: '',
            results: [],
            searches:[],
            dataIn: false,
            select: null 
        }
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSearch = () => {
        const searchTerm = this.state.search.slice()
        const searches = this.state.searches.slice()
        if(searchTerm.length){
            searches.push(searchTerm)
        }
        const results = this.props.notes
        const display = []
        searches.forEach(searchTerm => {
            results.forEach(result => {
            if(result.tags.includes(searchTerm) || result.title.includes(searchTerm) || result.textBody.includes(searchTerm)){
                if(!display.includes(result.title)){
                display.push(result.title)
                }
              }
            })
        })
        this.setState({results: display, search:'', dataIn: true, searches})
        
    }

    handleKeywordClick = event => {
        let searches = this.state.searches.slice();
        searches = searches.filter(search => search !== event.target.innerHTML) 
        this.setState({ searches })
        return setTimeout(() => {this.handleSearch()},300)
    }

    render(){
        let notes = []
        if(this.state.dataIn === true){
            notes = this.state.results.slice()
        }
        const searches = this.state.searches.slice()
        return (
            <div className="main-container">
              <SideBar />
              <div className="create-note-form searching-form">
                  
                  <input onChange = {this.handleChange} value = {this.state.search} type="text" placeholder ="&#x1F50D;Search" name = "search"/> <button onClick ={this.handleSearch} className ="btn-side-bar">Search</button>
                  <div className = "keywords">
                    <h5>keywords: </h5>
                    {searches.map((search,i)=> <i onClick ={this.handleKeywordClick} key ={i} className="far fa-times-circle">{search}</i>)}
                  </div>
                {notes.map((note,i) => <Link to = {{pathname:`/search/${note}`, state: this.props.notes.filter(nt => nt.title === note)[0]}} key ={note}><div className = "title-search" key={i}>{note}</div></Link>)}
                  <Route path = {`/search/:id`} render = {props => <SearchFullNote  {...props} /> } />

              </div>
            </div>
        )
    }
}
export default Search; 