import React from 'react';
import NotesCard from './NotesCard';

class NotesContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchString: ''
        }
    }

    handleInput = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    // Maps over all notes and passes them down to the NotesCard component
    render() {
        let notes = this.props.notes;
        let search = this.state.searchString.trim().toLowerCase().replace(/\\/g, "\\\\");

        if (search.length > 0) {
            notes = notes.filter(note => note.title.toLowerCase().match(search) || note.textBody.toLowerCase().match(search));
        }

        return (
            <div className='notes-container' >

                <form className='search-form'>
                    <input className='search-input-field' onChange={this.handleInput} value={this.state.searchString} name='searchString' type='text' placeholder='Search' />
                </form>

                <h3 className='main-notes-header' >Your Notes:</h3>
                <div className='notes-cards'>
                    {notes.map(note => <NotesCard key={note._id} note={note} />)}
                </div>

            </div>
        );
    }

}

export default NotesContainer;