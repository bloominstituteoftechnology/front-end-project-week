import React, { Component } from 'react';

class SingleNoteView extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        console.log(' any props in single view note?: ', this .props)
        return ( 
            <div>
                <h3 className='headings mainAreaHeading'>Your Notes</h3>
            </div>
         );
    }
}
 
export default SingleNoteView;