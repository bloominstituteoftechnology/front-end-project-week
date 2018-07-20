import React, { Component } from 'react';
import './index.css';
import { connect } from 'react-redux';
// import { deletingNote } from '../../actions';

class ModalComponent extends Component {
   
    render() { 
        console.log('props in modal : ', this.props)
        return ( 
            <div className={ this.props.toggleDisplay ? 'overlayWrapper' : 'displayNone' }>
                <div className='innerModal'>
                <div>
                    <h3 className='modalText'>Are you sure you want to delete this?</h3>
                </div>
                <div className='modalButtons'>
                    <button className='redButton modalB' onClick={this.props.deleteNote}>Delete</button>
                    <button className='regButton modalB' onClick={this.props.handleNo}>NO</button>
                </div>
                </div>
            </div>
         );
    }
}

 
export default connect(null, { }) (ModalComponent);