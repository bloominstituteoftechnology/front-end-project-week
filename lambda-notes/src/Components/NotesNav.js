import React, {Component} from 'react'

import '../App.css'
class NotesNav extends Component {

    constructor(props) {
        super(props);
    }
    render(){
    return (
        <nav className='nav'>
            <h1>Lambda Notes</h1>
            <button onClick={this.props.clickForAllHandler}>View Your Notes</button>
            <button onClick={this.props.clickForNewHandler}> + Create New Note</button>
        </nav>
    )
}
}

export default NotesNav