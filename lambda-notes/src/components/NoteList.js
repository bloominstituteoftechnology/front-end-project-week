import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import { addNote, noteOrder } from '../actions';

class NoteList extends Component {
    state = {
        search: '',
        titleCheck: true,
        bodyCheck: false,
        order: {}
    }

    updateSearch = (event) => {
        this.setState({ search: event.target.value.toLowerCase().substr(0,
            20)});
        event.preventDefault();
    }

    updateBody = (event) => {
        this.setState({ bodyCheck: !this.state.bodyCheck, titleCheck: this.state.bodyCheck});
    }

    updateTitle = (event) => {
        this.setState({ titleCheck: !this.state.titleCheck, bodyCheck: this.state.titleCheck});
    }

    handleAlphaSort = (event) => {
        event.preventDefault();
        let noteOrder = {}
        let noteTitles = this.props.notes.map(note => {
            return note.title;
        })
        noteTitles = noteTitles.sort();
        // console.log(noteTitles);
        for (let i = 0; i < noteTitles.length; i++) {
            noteOrder[this.props.notes[i].title] = this.props.notes[i];
            // console.log(this.state.order)
        }
        for (let i = 0; i < noteTitles.length; i++) {
            this.props.notes[i] = noteOrder[noteTitles[i]];
            // console.log(this.props.notes)
        }
    }

    savedPosition = () => {
        setTimeout(() => {
            let source = Array.from(document.getElementsByClassName('note'));
            let currentOrder = [];
            let savedOrder = {};
            source.forEach((item, index) => {
                currentOrder.push(item.id)
            });
            this.setState({ order: currentOrder });
            console.log(typeof this.state.order);
            
            for (let i = 0; i < this.state.order.length; i++) {
                savedOrder[this.props.notes[i].id] = this.props.notes[i];
                console.log(this.state.order)
            }
            for (let i = 0; i < this.state.order.length; i++) {
                this.props.notes[i] = savedOrder[this.state.order[i]];
                console.log(this.props.notes)
            }
        }, 200);
        this.setState(this.state);
        this.noteOrder
    }

    render() {
        // console.log(document.getElementsByClassName("note"))
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
                    <div className="dropdown-sort">
                        <Dropdown 
                            direction="right" 
                            isOpen={this.state.btnDropright} 
                            toggle={() => { this.setState({ btnDropright: !this.state.btnDropright }); }}>
                            <DropdownToggle caret>
                                Sort Notes
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick={this.handleAlphaSort}>Sort By A to Z</DropdownItem>
                                <DropdownItem onClick={console.log('sort2')}>Sort by Date</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </form>
                <div className="notelist" id="sortable">
                    {filteredNotes.map((note) => {
                        return (
                        <Link 
                            style={{textDecoration: "none", color: "black"}} 
                            key={note.id} 
                            to={`/note/${note.id}`} 
                            id = {note.id}
                            className="note-link note ui-state-default"
                            onMouseUp={this.savedPosition}>
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

export default connect(mapStateToProps, { addNote, noteOrder })(NoteList);