import React from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';

const URL = "http://localhost:3000/"

class ViewNote extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            body: '',
            id: this.props.id
        }
    }

    render() {
        return (
            <div> 
                <Sidebar />
            <div className="ViewNote">
            <h3>{this.props.title}</h3>
            <p>{this.props.body}</p>    
            </div>
            </div>
        )
    }
}



export default ViewNote;