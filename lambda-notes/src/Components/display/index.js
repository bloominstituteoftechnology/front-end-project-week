import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import { Button, Modal } from 'reactstrap';
import { Component } from 'react';
class Display extends Component {
    
        state = {
            modal: false
        };


    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }
    render() {
        return (

            <div className='Display'>
                <div className='Display__buttons'>
                    <Link to='/Notes/:id/edit' className='edit'> edit</Link>
                    {/* button to open modal */}
                    <Button onClick={this.toggle} className='delete' > delete</Button>
                </div>
                {/* modal that is opened */}
                <Modal className='modalOpen' isOpen={this.state.modal} toggle={this.toggle}>
                    <div className='modalBody'> Are you sure you want to delete this note?</div>
                    <div className='modalbtns'>
                        <div className='teal' onClick={this.toggle}> Delete </div>
                        <div className='red' onClick={this.toggle}> No</div>
                    </div>
                </Modal>
                <div className='Display__content header'> Note Header</div>
                <div className='Display__content'>Note title</div>
                <div className='Display__content'>Note body</div>


            </div>
        )
    }
}
export default Display;