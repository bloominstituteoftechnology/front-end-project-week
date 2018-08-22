import React, {Component} from 'react';
import {Link} from 'react-router-dom'; 



class SideBar extends Component {
    constructor(props){
        super(props) 
        this.state = {

        }
    }

    render(){

        if (this.props.name){
            return (
                <div className ="side-bar">
                  <h1 className = {this.props.name ? "application-title deleting": "application-title" }>Lambda Notes</h1>
                  <button className="btn-side-bar deleting">View Your Notes</button>
                  <button className="btn-side-bar deleting">+ Create New Note</button>
               </div>
            )
        }
        
        return (
            <div className ="side-bar">
                <h1 className = "application-title">Lambda Notes</h1>
                <Link to = "/"><button className="btn-side-bar">View Your Notes</button></Link>
                <Link to="create-note"> <button className="btn-side-bar">+ Create New Note</button> </Link>
                <Link to='rhyme-book'> <button className ="btn-side-bar">Rhyme Book</button></Link>
            </div>
        )

    }
}

export default SideBar