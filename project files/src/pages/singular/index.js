import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SingleNote extends Component {

    render(){
        return(
            <div>

                <div>Note Title</div>
                <div> Note Text</div>
                <Link to='/edit'>Edit Note</Link>
                </div>
        )
    }
}

export default SingleNote;
