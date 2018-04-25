import React, { Component } from 'react'
import { connect } from 'react-redux'
import { show } from 'redux-modal'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { getNote } from '../../actions';
import DeleteModal from '../Modal/DeleteModal';
import DeleterModal from '../Modal/DeleterModal'
import { bindActionCreators } from 'redux'

const styled = {  //this is for the link to not look like an anchor tag
    textDecoration: 'none',
    // color: 'rgb(97, 76, 76)'
    color: 'black'
}

class ViewNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
    }

    componentDidMount() {
        this.props.getNote(this.props.id);
        // console.log('cdm state', this.state)
    }

    handleOpen = name => () => {
        this.props.show(name, { message: `This is a ${name} modal` })
    };

    // toggle = () => {             //this is for the modal i hope to implement, still having issues
    //     this.setState({  
    //         modal: !this.state.modal
    //     });
    // }

    // componentWillReceiveProps(newProps) {   //this was where i tested for my EditNote component
    //     console.log('cwrp', newProps)
    //     this.setState({
    //         noteName: newProps.noteName,
    //         noteBody: newProps.noteBody
    //     })
    // }

    render() {
        console.log('render', this.props, 'state', this.state)
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
                                    {/* <Button className="mainContent__options--links" bsStyle="primary" onClick={this.handleOpen('deleter')}>delete</Button> */}
                                    <DeleteModal
                                        modal={'modal'}
                                        body={'modal__body'}
                                        footer={'modal__footer'}
                                        delete={'button button--delete'}
                                        cancel={'button button--cancel'}
                                    />
                                    {/* <DeleterModal show={this.props.modal} name='deleter' message={'My Message sucks'} /> */}
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

const mapStateToProps = (state, ownProps) => {
    // console.log('state in view', state, 'state props', ownProps, 'modal', state.rootReducer.modal);
    return {
        notes: state.rootReducer.noteReducer.notes,
        id: ownProps.match.params.id,
    }

}

export default connect(mapStateToProps, dispatch => bindActionCreators({ show, getNote }, dispatch))(ViewNote);