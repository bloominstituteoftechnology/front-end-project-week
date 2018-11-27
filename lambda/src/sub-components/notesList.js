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
    // onDragStart = (e, id, title, textBody, wholeNote) => {
    //     // console.log('dragstart:', wholeNote);

    //     // e.dataTransfer.setData("id", id);
    //     // e.dataTransfer.setData("title", title);
    //     // e.dataTransfer.setData("textBody", textBody);
    //     // e.dataTransfer.setData('note', Object.entries(wholeNote));

    //     // console.log(e.target.className);
    //     // e.dataTransfer.setData('element', e.target);

    //     console.log(document.getElementById(`${id}`));
    //     const grabbedNote = document.getElementById(`${id}`);
    //     e.dataTransfer.setData('note', grabbedNote)
    // }
    // onDragOver = e => {
    //     // console.log('dragged over!');
    //     e.preventDefault();
    // }
    // onDrop = (e, id) => {
    //     // let thisId = e.dataTransfer.getData('id');
    //     // let thisTitle = e.dataTransfer.getData('title');
    //     // let thisTextBody = e.dataTransfer.getData('textBody');
    //     // let draggedElement = e.dataTransfer.getData('element');
    //     // console.log(draggedElement);
    //     // console.log(e.target);

    //     console.log(document.getElementById(`${id}`));
    //     const dropSpot = document.getElementById(`${id}`);
    //     const draggedNote = e.dataTransfer.getData('note');
    //     console.log(draggedNote);

    //     // console.log(e.target.className);
    //     // if (e.target.className === 'each-note') {
    //     //     dropSpot.insertAdjacentElement('beforebegin', draggedNote );
    //     // } else {
    //     //     console.log('drag and drop unsuccessful. Please drop in first note after the location you wish to drop into')
    //     // }

    //     // console.log('drop complete!');
    // }
    render() {
        let filteredNotes = this.props.notesList.filter((eachContact) => {
            return (
                eachContact.title.toLowerCase().indexOf(this.state.search) !== -1
            )
        });
        //potentially delete blank notes here
        //let moreFilteredNotes = filteredNotes.filter((eachFilteredNote) => {
            //return (
                //eachFilteredNote.title && eachFilteredNote.textBody !== ''
            //)
        //})
        //change the .map(eachNote) if needed..
        return (
            <div className='list-view'>
                <div className='notes-sidebar'>
                    <h1 className='title'>Lambda Notes</h1>
                    <NavLink to='/' className='navlink' exact activeClassName='navlink-selected'><button onClick={this.props.pageReload}>View Your Notes</button></NavLink>
                    <NavLink to='/create-new-note' className='navlink' exact activeClassName='navlink-selected'><button onClick={this.props.pageReload}>+ Create New Note</button></NavLink>
                </div>
                <div className='notes-section' onDragOver={this.onDragOver} onDrop={this.onDrop} >
                    <h3 className='notes-title'>Your Notes:</h3>
                    <input className='notes-search' placeholder='Search' onChange={this.updateSearch}></input>
                    {filteredNotes.map((eachNote) => {
                        return (
                            <NavLink to={`/note/${eachNote._id}`} key={eachNote._id} id={eachNote._id} className='navlink' exact activeClassName='navlink-selected' onDragStart={(e) => this.onDragStart(e, eachNote._id, eachNote.title, eachNote.textBody, eachNote)} onDrop={(e) => this.onDrop(e, eachNote._id)} draggable >
                                    <div className='each-note' onClick={this.props.pageReload} draggable='false' >
                                        <h4 className='each-note-title'>{eachNote.title}</h4>
                                        <p>{eachNote.textBody}</p>
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