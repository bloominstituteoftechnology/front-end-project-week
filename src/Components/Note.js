import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';

class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            Redirect: false,
            note: {},
        };
    
        this.toggle = this.toggle.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal,
        });
    }

    handleDelete = () => {
        this.props.delete(this.props.match.params.id);
        this.setState({ modal: false, Redirect: true })
    }
    render() {
        console.log('note', this.props.location.state);
        return (
            <React.Fragment>
            <div className="Note">
            {(this.state.Redirect) ? (<Redirect to={"/"} />) : ('')}
            
                <div className="Note__nav">
                    <Link className="Nav__item" to={`/notes/EditNote/${this.props.location.state.currentNote.id}`}>edit</Link>

                        <a className="Nav__item" onClick={this.toggle}>delete</a>
                        {(this.state.modal) ? (
                        <Modal className="Modal" isOpen={this.state.modal} onClose={this.toggle}>
                        <ModalHeader toggle={this.toggle}>Are you sure you want to delete this?</ModalHeader>
                        <ModalFooter>
                            <Button color="Button__Delete" onClick={this.handleDelete}>Delete</Button>
                            <Button className="Button" onClick={this.toggle}>No</Button>
                        </ModalFooter>
                        </Modal>
            ) :null }  
                    
             </div>
                <div>
                <h4 className="Note__title">{this.props.location.state.currentNote.title}</h4>
                <p className="Content">{this.props.location.state.currentNote.text}</p>
                </div>
            </div>
         </React.Fragment>
        );
    };
}

export default Note;