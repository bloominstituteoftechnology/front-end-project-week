import React from 'react';
import SideBar from './side-bar';
import axios from 'axios';




class Rhyme extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            word: '',
            rhymes: [],
            rhymeWord: ''
        }
    }

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})

    }
    handleSearch = () => {
        const url = 'https://api.datamuse.com/words?'
        const queryParams = 'rel_rhy=';
        const rhymeWord = this.state.word.slice() 
        const endPoint = url+queryParams+rhymeWord;
        const promise = axios.get(endPoint)
        promise.then(response => {
            const rhymes = response.data
            this.setState({rhymes, word: '', rhymeWord })
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        const allRhymes = this.state.rhymes.slice() 
        let rhymes = []
        if (allRhymes.length){
          allRhymes.forEach(rhyme => rhymes.push(rhyme.word) )
          rhymes = rhymes.join(',  ')
        }

        return (
            <div className="main-container">
                <SideBar /> 
                <div className = "create-note-form">
                  <input onChange = {this.handleChange} type="text" name ='word' value ={this.state.word}/>
                  <button onClick = {this.handleSearch} className = "btn-side-bar">Rhyme</button>
                  <h3>Rhyme : {this.state.rhymeWord}</h3>
                  {<p>{rhymes}</p> }
                </div>
                
            </div>
        )
    }
}
export default Rhyme;