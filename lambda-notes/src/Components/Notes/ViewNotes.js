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
        let id = window.location.pathname.split('/');
        id = id[2];
        this.props.getNote(URL, id);
        // this.props.getNote(this.props.id);
    }

    handeInputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleInputSubmit = id => {
        const note = {
            title: this.state.title,
            textBody: this.state.body,
        }
        this.props.updateNote(URL, id, note);
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        console.log('view note', this.props.notes);
        return (
            <div className="mainContent" >
                {this.props.notes.map(note => {
                    return (
                        <div key={note._id} >
                            <div className="mainContent__options" >
                                <Link to={`/edit/${note._id}/`} style={styled} >Edit</Link>
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
                                {note.title}
                            </div>
                            <div className="mainContent__content mainContent__content--view" >
                                {note.textBody}
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
};

const stateProps = (state, ownProps) => {
    console.log('state', state)
    return {
        notes: state.rootReducer.notes,
        id: ownProps.match.params.id
    }
}

export default connect(stateProps, { getNote })(ViewNote);