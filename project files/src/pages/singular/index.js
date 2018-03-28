import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { notes } from '../notes';

class SingleNote extends Component {
    
    constructor(){
        super();
        this.state = {
            notes: notes
        }

    }

    componentDidMount(){
        this.setState({notes: notes })
        console.log(this.state)
    }
    render(){
        return(
            <div className='page-container'>
            {/* {this.props.notes.map(note => { */}
                <div>
                <div>{this.props.title}</div>
                <div>{notes.text}</div>
                <Link to={`/edit/${notes.id}`}>Edit Note</Link>
                </div>
             {/* })}  */}
                </div>
        )
    }
}

export default SingleNote;
