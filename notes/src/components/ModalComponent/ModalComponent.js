import React, { Component } from 'react';
import './index.css';
import { connect } from 'react-redux';
// import { deletingNote } from '../../actions';

class ModalComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentDidMount() {
        // const id = this.props.notes._id
        // console.log('check id in modal: ', id)
        // this.props.deletingNote()
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
                    <button className='redButton modalB' onClick={this.props.deleteNote}>DELETE</button>
                    <button className='regButton modalB' onClick={this.props.onClick}>NO</button>
                </div>
                </div>
            </div>
         );
    }
}
const mapStateToProps = state => {
    console.log('map in modal : ', state)
    return {
        notes: state.notes
    }
}
 
export default connect(mapStateToProps, { }) (ModalComponent);