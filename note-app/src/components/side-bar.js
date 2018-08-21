import React, {Component} from 'react';
import {Link} from 'react-router-dom'; 



class SideBar extends Component {
    constructor(props){
        super(props) 
        this.state = {

        }
    }

    render(){
        console.log(this.props)
        return (
            <div className ="side-bar">
                <h1 className = "application-title">Lambda Notes</h1>
                <Link to = "/"><button className="btn-side-bar">View Your Notes</button></Link>
                <Link to="create-note"> <button className="btn-side-bar">+ Create New Note</button> </Link>
            </div>
        )

    }
}

export default SideBar