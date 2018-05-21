import React, { Component } from 'react';

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
                <div>
                    <button>Update</button>
                </div>
            </div>
         )
    }
}
 
export default EditNote;