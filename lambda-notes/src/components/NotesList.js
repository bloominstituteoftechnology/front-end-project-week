import React from 'react';
import { connect } from 'react-redux';
import { fetchNotes } from '../actions';
import NoteCard from './NoteCard';


class NotesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidUpdate(prevState) {
        if(this.props.adding !== prevState.adding || this.props.updating !== prevState.updating || this.props.deleting !== prevState.deleting) {
            if(!this.props.adding && !this.props.updating && !this.props.deleting) {
                this.props.fetchNotes();
            }
        }
    }

    componentDidMount() {
        this.props.fetchNotes();
    }


    render() {
        if(this.props.updating) {
            return <h3>Updating Note ...</h3>
        }
        if(this.props.adding) {
            return <h3>Adding Note ...</h3>
        }
        if(this.props.fetching) {
            return <h3>Loading Notes ...</h3>
        }

        let filtered = this.props.notes.filter(note => {
            if(note.title.toLowerCase().indexOf(this.props.search.toLowerCase()) !== -1 || note.textBody.toLowerCase().indexOf(this.props.search.toLowerCase()) !== -1) {
                return note;
            }
            return null;
        })


        return (
            <div>
                <h3 className='notes-page-title'>Your Notes:</h3>
                <div className='noteList-card-container'>
                    {filtered.map(note => {
                        return (
                            <div key={note._id}>
                                <NoteCard noteInfo={note} />
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        notes: state.notes,
        fetching: state.fetching,
        adding: state.adding,
        updating: state.updating,
        deleting: state.deleting,
    };
}

export default connect(
    mapStateToProps,
    { fetchNotes }
) (NotesList);