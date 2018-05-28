import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addNote } from '../actions';

class NoteList extends Component {
    state = {
        search: '',
        titleCheck: true,
        bodyCheck: false,
        order: []
    }

    updateSearch = (event) => {
        this.setState({ search: event.target.value.toLowerCase().substr(0,
            20)});
        event.preventDefault();
    }

    updateBody = (event) => {
        this.setState({ bodyCheck: !this.state.bodyCheck, titleCheck: this.state.bodyCheck})
    }

    updateTitle = (event) => {
        this.setState({ titleCheck: !this.state.titleCheck, bodyCheck: this.state.titleCheck})
    }

    savedPosition = () => {
        let source = Array.from(document.getElementsByClassName('note'));
        let order = [];
        source.forEach((item, index) => {
            order.push(item.id)
        });
        this.setState({order});
        // console.log(order);
    }

    render() {
        console.log(document.getElementsByClassName("note"))
        // console.log('body',this.state.bodyCheck)
        // console.log('title',this.state.titleCheck)
        let filteredNotes = this.props.notes.filter((note) => {
            if (this.state.search === '') {
                return this.props.notes;
            }
            if (this.state.titleCheck) {
                return note.title.toLowerCase().indexOf(this.state.search) !== -1;
            } else if (this.state.bodyCheck) {
                return note.body.toLowerCase().indexOf(this.state.search) !== -1;
            }
            return this.props.notes;
        });
        return (
            <div className="notelist-container">
                <h1>Your Notes:</h1>
                <form>
                    <input 
                        className="search-input"
                        placeholder="Select Search Type..."
                        type="text"
                        value={this.state.search}
                        onChange={this.updateSearch}
                    />
                    <div className="radio-container">
                        <input 
                            className="radio-button title-button"
                            type="radio"
                            value={this.state.titleCheck}
                            name="search"
                            onChange={this.updateTitle}
                            defaultChecked
                            /><label>Search Title</label>
                        <input 
                            className="radio-button body-button"
                            type="radio"
                            value={this.state.bodyCheck}
                            name="search"
                            onChange={this.updateBody}
                            /><label>Search Body</label>
                    </div>
                </form>
                <div className="notelist" id="sortable">
                    {filteredNotes.map((note) => {
                        return (
                        <Link 
                            style={{textDecoration: "none", color: "black"}} 
                            key={note.id} to={`/note/${note.id}`} 
                            id = {note.id}
                            className="note-link note ui-state-default">
                            <div>
                                <h4>{note.title}</h4>
                                <p>{note.body}</p>
                            </div>
                        </Link>
                        )
                    })}
                </div>
                {/* <button onClick={this.savedPosition}>test</button> */}
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        notes: store
    };
};

export default connect(mapStateToProps, { addNote })(NoteList);