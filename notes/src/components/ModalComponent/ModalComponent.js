import React, { Component } from 'react';
import './index.css';

class ModalComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className={ this.props.toggleDisplay ? 'overlayWrapper' : 'displayNone' }>
                <div>
                    <h3>Are you sure you want to delete this?</h3>
                </div>
                <div className='modalButtons'>
                    <button className='redButton modalB'>DELETE</button>
                    <button className='regButton modalB'>NO</button>
                </div>
            </div>
         );
    }
}
 
export default ModalComponent;