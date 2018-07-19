import React from 'react';
import { getNote } from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import DeleteModal from '../Modal/DeleteModal';

const styled = {
    textDecoration: 'none',
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
                                </div>
                            </div>
                            <div className="directory__title mainContent__title" >
                                {note.name}
                            </div>
                            <div className="mainContent__content mainContent__content--view" >
                                {note.body}
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
};

const stateProps = (state, ownProps) => {
    return {
        notes: state.rootReducer.noteReducer.notes,
        id: ownProps.match.params.id
    }
}

export default connect(stateProps, { getNote })(ViewNote);