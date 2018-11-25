import React from 'react';
import { NavLink } from 'react-router-dom';

class NotesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
        }
    }
    updateSearch = e => {
        this.setState({search: e.target.value}) 
    }
    render() {
        let filteredNotes = this.props.notesList.filter((eachContact) => {
            return (
                eachContact.title.toLowerCase().indexOf(this.state.search) !== -1
            )
        });
        
        return (
            <div className='list-view'>
                <div className='notes-sidebar'>
                    <h1 className='title'>Lambda Notes</h1>
                    <NavLink to='/' className='navlink' exact activeClassName='navlink-selected'><button onClick={this.props.pageReload}>View Your Notes</button></NavLink>
                    <NavLink to='/create-new-note' className='navlink' exact activeClassName='navlink-selected'><button onClick={this.props.pageReload}>+ Create New Note</button></NavLink>
                </div>
                <div className='notes-section'>
                    <h3 className='notes-title'>Your Notes:</h3>
                    <input className='notes-search' placeholder='Search' onChange={this.updateSearch}></input>
                    {filteredNotes.map((eachNote) => {
                        return (
                            <NavLink to={`/note/${eachNote._id}`} key={eachNote._id} className='navlink' exact activeClassName='navlink-selected' >
                                <div onClick={this.props.pageReload}>
                                    <div id={eachNote._id} className='each-note' >
                                        <h4 className='each-note-title'>{eachNote.title}</h4>
                                        <p>{eachNote.textBody}</p>
                                    </div>
                                </div>
                            </NavLink>
                        )
                    })}
                </div>
            </div>
        );
    }
}


export default NotesList;