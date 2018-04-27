import React, { Component } from 'react'
import { connect } from 'react-redux'
import { show } from 'redux-modal'
import { Link } from 'react-router-dom';
import { getNote, deleteNote } from '../../actions';
import DeleteModal from '../Modal/DeleterModal';
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
    }

    handleOpen = name => () => {
        this.props.show(name, { message: `This is a ${name} modal` })
    };

    removeNote = () => {
        this.props.deleteNote(this.props.id);
        let route = window.location.pathname.split('/')
        let newRoute = route.splice(0, route.length - 2).join('/')
        window.location.pathname = newRoute;
    }

    // componentWillReceiveProps(newProps) {   //this was where i tested for my EditNote component
    //     console.log('cwrp', newProps)
    //     this.setState({
    //         noteName: newProps.noteName,
    //         noteBody: newProps.noteBody
    //     })
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
                                        modal={'modal modal-test'}
                                        body={'modal__body'}
                                        footer={'modal__footer'}
                                        delete={'button button--delete'}
                                        cancel={'button button--cancel'}
                                        removeNote={this.removeNote}
                                    />
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
    return {
        notes: state.rootReducer.noteReducer.notes,
        id: ownProps.match.params.id,
    }

}

export default connect(mapStateToProps, dispatch => bindActionCreators({ show, getNote, deleteNote }, dispatch))(ViewNote);