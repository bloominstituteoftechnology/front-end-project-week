import React, { Component } from 'react';
import './index.css';

class ModalComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        console.log('props in modal : ', this.props)
        return ( 
            <div className={ this.props.toggleDisplay ? 'overlayWrapper' : 'displayNone' }>
                <div className='innerModal'>
                <div>
                    <h3 className='modalText'>Are you sure you want to delete this?</h3>
                </div>
                <div className='modalButtons'>
                    <button className='redButton modalB'>DELETE</button>
                    <button className='regButton modalB' onClick={this.props.onClick}>NO</button>
                </div>
                </div>
            </div>
         );
    }
}
 
export default ModalComponent;