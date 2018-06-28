import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ListView.css';
import marked from 'marked';

class ListView extends Component {
    constructor(props){
        super(props);
        this.state = {
            search: ''
        }
    }

    componentDidMount() {
        const isAuthorized = localStorage.getItem('jwt')
        if (!isAuthorized) {
            this.props.history.push('/login');
        }
        this.props.updateState();
    }

    getMarkdownText(text) {
        var rawMarkup = marked(`${text}`, {sanitize: true});
        return { __html: rawMarkup };
    }

    updateSearch = (e) => {
        this.setState({ search: e.target.value });
    }

    filterBySearch = (note) => {
        if((note).title.toUpperCase().indexOf(this.state.search.toUpperCase()) >= 0 || (note).textBody.toUpperCase().indexOf(this.state.search.toUpperCase()) >= 0 || this.state.search === '') return 'entireNoteCardLink';
        else return 'hiddenCard';
    }

    render() {
        return (
            <div className='listViewContainer'>
                <div className='sortingOptions'>
                    <div className='searchContainer'>
                        <input onChange={this.updateSearch} value={this.state.search} type='search' name='q' className='search' placeholder='search' />
                    </div>
                    <p>sort by:</p>
                    <p className='sortOption' onClick={() => this.props.sortNotesList('title')}>title</p>
                    <p className='sortOption' onClick={() => this.props.sortNotesList('textBody')}>body</p>
                    <p className='sortOption' onClick={() => this.props.sortNotesList('_id')}>id</p>
                </div>
                <h3 className='listViewHeader'>Your Notes:</h3>

                <div>
                    {( this.props.notesList == '' ?
                    <div className='noNotes'>
                        <p>You dont have any notes :(</p>
                        <p className='clickThere'>&larr; Click there to add a note</p>
                    </div>
                    :
                    <div className='noteCardsCollection'>
                        {this.props.notesList.map(note => (
                            <div onClick={() => this.props.setCurrentNote(note._id)} key={note._id} className={this.filterBySearch(note)}>
                                <Link to={`/${note._id}/view`} className='noteCardLink'>
                                    <div className='noteCard'>
                                        <h6 dangerouslySetInnerHTML={this.getMarkdownText(note.title)} className='noteTitle'></h6>
                                        <span dangerouslySetInnerHTML={this.getMarkdownText(note.textBody)} className='noteContent'></span>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                    )}
                </div>
            </div>
        )
    }
}

export default ListView;