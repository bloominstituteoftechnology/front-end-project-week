import React, {Component} from 'react';


class SideBar extends Component {
    constructor(props){
        super(props) 
        this.state = {

        }
    }

    render(){
        return (
            <div className ="side-bar">
                <h1 className = "application-title">Lambda Notes</h1>
                <button className="btn-side-bar">View Your Notes</button>
                <button className="btn-side-bar">+ Create New Note</button>
            </div>
        )

    }
}

export default SideBar