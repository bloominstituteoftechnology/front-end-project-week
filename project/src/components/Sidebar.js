import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Sidebar extends Component {
    
    render(){
        return(
            <div className = "sb-wrap">
                <h1 className = "sb-title">Lambda Notes</h1>
                <Link to = "/"><button>View Your Notes</button></Link>
                <Link to = "/note/new"><button>+ Create New Note</button></Link>
            </div>
        )
    }
} 

export default Sidebar