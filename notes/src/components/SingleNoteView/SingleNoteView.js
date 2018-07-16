import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ModalComponent  from '../ModalComponent/ModalComponent';
import './index.css';

class SingleNoteView extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            modalForm: false,
         }
    }

    popModal = () => {
        this.setState({ modalForm: !this.state.modalForm })
    }
    handleNo = () => {
        this.props.history.push('/')
    }

    render() { 
        console.log(' any props in single view note?: ', this .props)
        return ( 
            <div>
                
                    <div className='editDeleteLinks'>
                        <Link className='editDeletelink' to={`/edit/${this.props.match.params.id}`}>edit</Link>
                        <a className='editDeletelink' onClick={this.popModal}>delete</a>
                    </div>
                    <div>
                        <h3 className='headings mainAreaHeading'>Note Name</h3>
                    </div>

                <ModalComponent 
                    toggleDisplay={this.state.modalForm}
                    popModal={this.popModal}
                    onClick={this.handleNo} />
            </div>
         );
    }
}
 
export default SingleNoteView;