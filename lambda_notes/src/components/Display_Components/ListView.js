import React, { Component } from 'react'
import axios from 'axios';



class ListView extends Component {
    constructor() {
        super()
    this.state = {
        notes: [],

    }

}


    componentDidMount() {
    axios.get(`https://fe-notes.herokuapp.com/note/get/all`)
        .then( res => {
            this.setState({
                notes: res.data,
            })
        })
        .catch( err => {
            throw new Error(err);
        })
        
}


    render() {
        return (
            <div>
            {this.state.notes.map( note => {
                return(
                    <article key={note.id}>
                    <h4>{note.title}</h4>
                    <p>{note.textBody}</p>
                    </article>
                )
            })}
            </div>
        )
    }
}


export default ListView;