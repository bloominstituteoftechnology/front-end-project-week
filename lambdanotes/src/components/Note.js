import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';
import { Markdown } from 'react-showdown';

class Note extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
        };
    
        this.toggle = this.toggle.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

    }
    
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    
    handleDelete = () => {
        this.props.delete(this.props.match.params.id);
        this.props.history.push('/notes');
    }

    render() {
    return (
        <div className="Note">
            <div className="Note__nav">
                <Link className="Nav__item" to={{pathname: `/notes/${this.props.location.state.currentNote._id}/EditNote`, state: { default: this.props.location.state.currentNote }}}>edit</Link>
                <div className="Nav__item">
                    <a className="Nav__item" onClick={this.toggle}>Delete</a>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Do You Want To Delete This?</ModalHeader>
                    <ModalFooter>
                        <Button className="Button__Delete" onClick={this.handleDelete}>Delete</Button>
                        <Button className="Button" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                    </Modal>
                </div>
            </div>
            <div className="AddNote__Tags">
                <h4 className="Note__title">{this.props.location.state.currentNote.title}</h4>
                <div className="Tags">
                    {this.props.location.state.currentNote.tags.length > 0 ? this.props.location.state.currentNote.tags.map(((tag, index) => {
                                    return (
                                        <div key={index} className="Tag" style={ { background: `${tag.color}` } }>
                                            {tag.name}
                                        </div> 
                                    )
                                })) 
                                : <div></div> }
                </div>
            </div>
            <div className="Content">
            <Markdown markup={ this.props.location.state.currentNote.content } strikethrough="true" tasklists="true" />
            </div>
            <span>Created {this.props.location.state.currentNote.timestamp}</span>
        </div>
    );
};
}

export default Note;