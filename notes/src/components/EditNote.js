import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EditNote extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div style={{ display:'flex', flexWrap:'wrap' }}>
                <h3>Edit Note:</h3>
                <div>
                    <input placeholder="Note Title"/>
                </div>
                <div>
                    <input style={{ width:'500px', height:'500px' }} placeholder="Note Content"/>
                </div>
                <span>
                    <Link to="/">
                        <button>Update</button>
                    </Link>
                </span>
            </div>
         )
    }
}
 
export default EditNote;