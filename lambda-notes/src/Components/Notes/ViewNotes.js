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
        console.log('props', this.props);
        let id = window.location.pathname.split('/');
        id = id[2];
        this.props.getNote(URL, id);
        // grabs note from server via url
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
// The error is here somewhere, i don't think it's Link to because looking over some of the groups code they used it in this case as well
    render() {
        return (
            <div className="mainContent" >
                {this.props.notes.map(note => {
                    return (
                        <div key={note._id} >
                        {/* edit functionality of notes  */}
                            <div className="mainContent__options" >
                                <Link to={`/edit/${note._id}/edit`} style={styled} >Edit</Link>
                                <div>
                                    <DeleteModal 
                                    // delete or cancel deleteing of note
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
    return {
        notes: state.rootReducer.notes,
        id: ownProps.match.params.id
    }
}

export default connect(stateProps, { getNote })(ViewNote);