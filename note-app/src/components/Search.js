import React from 'react';
import SideBar from './side-bar'

class Search extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            search: '',
            results: [],
            searches:[],
            dataIn: false
        }
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleSearch = () => {
        console.log('clicked')
        const searchTerm = this.state.search.slice()
        const searches = this.state.searches.slice()
        searches.push(searchTerm)
        const results = this.props.notes
        const display = results.filter(result => result.tags.includes(searchTerm) || result.title.includes(searchTerm) || result.textBody.includes(searchTerm))
        console.log(display)
        console.log(this.state.search)
        console.log(this.state.dataIn)
        this.setState({results: display, search:'', dataIn: true, searches})
    }
    handleKeywordClick = event => {
        console.log(event.target.innerHTML)
        let searches = this.state.searches.slice();
        searches = searches.filter(search => search !== event.target.innerHTML) 
        this.setState({ searches })
    }


    render(){
        console.log(this.state.search)
        let notes = []
        if(this.state.dataIn === true){
            notes = this.state.results.slice()
        }
        const searches = this.state.searches.slice()
        return (
            <div className="main-container">
              <SideBar />
              <div className="searching-form">
                  
                  <input onChange = {this.handleChange} value = {this.state.search} type="text" placeholder ="&#x1F50D;Search" name = "search"/> <button onClick ={this.handleSearch} className ="btn-side-bar">Search</button>
                  <div className = "keywords">
                    <h5>keywords: </h5>
                    {searches.map((search,i)=> <i onClick ={this.handleKeywordClick} key ={i} className="far fa-times-circle">{search}</i>)}
                  </div>
                  {notes.map(note => <div className = "title-search" key = {note.id}>{note.title}</div>)}
              </div>
            </div>
        )
    }
}
export default Search; 