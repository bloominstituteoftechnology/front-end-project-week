import React, { Component } from 'react';

class Newnote extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div style={{ display:'flex', flexWrap:'wrap' }}>
                <h3>Create New Note:</h3>
                <div className="note-title">
                    <input placeholder="Note Title"/>
                </div>
                <div>
                    <input style={{ width:'500px', height:'500px' }} placeholder="Note Content"/>
                </div>
                <div>
                    <button>Save</button>
                </div>
            </div>
         )
    }
}
 
export default Newnote;