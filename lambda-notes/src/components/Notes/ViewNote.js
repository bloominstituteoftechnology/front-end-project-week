/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { getNote } from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import DeleteModal from '../Modal/DeleteModal';

const styled = {
    textDecoration: 'none',
    // color: 'rgb(97, 76, 76)'
    color: 'black'
}

class ViewNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
    }

    componentDidMount() {
        this.props.getNote(this.props.id);
        console.log('cdm state', this.state)
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    // componentWillReceiveProps(newProps) {
    //     if (this.props.match.params.id !== newProps.match.params.id) {
    //         this.props.getNote(newProps.match.params.id);
    //     }
    // }

    render() {
        return (
            <div className="mainContent" >
                {this.props.notes.map(note => {
                    return (
                        <div key={note.id} >
                            <div className="mainContent__options" >
                                <Link to={`/notes/${note.id}/edit`} style={styled} >
                                    <span className="mainContent__options--links" >edit</span>
                                </Link>
                                <div>
                                    <DeleteModal 
                                    modal={'modal'}
                                    body={'modal__body'}
                                    footer={'modal__footer'}
                                    delete={'button button--delete'} 
                                    cancel={'button button--cancel'} 
                                    />
                                    {/* <Button className="mainContent__options--links" onClick={this.toggle}>delete</Button>
                                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                        <ModalBody>
                                            Are you sure you want to delete this?
                                        </ModalBody>
                                        <ModalFooter>
                                            <Button className="button button--delete" onClick={this.toggle}>Delete</Button>{' '}
                                            <Button className="button button--cancel" onClick={this.toggle}>No</Button>
                                        </ModalFooter>
                                    </Modal> */}
                                </div>
                            </div>
                            <div className="directory__title mainContent__title" >
                                {note.name}
                            </div>
                            <div className="mainContent__content mainContent__content--view" >
                                {note.body}
                            </div>
                        </div>)
                })}
            </div>
        )
    }
};

const stateProps = (state, ownProps) => {
    console.log('state in view', state, 'state props', ownProps)
    return {
        notes: state.rootReducer.notes,
        id: ownProps.match.params.id
    }
}

export default connect(stateProps, { getNote })(ViewNote);