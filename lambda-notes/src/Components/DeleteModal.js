import React, {Component} from 'react'
import '../App.css'

class DeleteModal extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return(
            <div className='deleteContainer'>
            <p> Are you sure you want to delete this? </p>
            <div className='deleteButtons'>
            <button className='red'>Delete</button>
            <button onClick={this.props.noHandler}>No</button>
            </div>
            </div>
        )
    }
}

export default DeleteModal