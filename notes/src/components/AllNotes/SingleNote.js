import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SingleNote extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        console.log('this props in single note: ', this.props)
        return ( 
            
                <div className='singleNote'>
                    <Link to={`note/get/${this.props.item._id}`} className='linksNotes'>
                    <h4 className='headings'>{this.props.item.title}</h4>
                    <hr />
                    <p>{this.props.item.textBody}</p>
                    </Link>
                </div>
            
         );
    }
}
 
export default SingleNote;