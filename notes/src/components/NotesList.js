import React, { Component } from 'react';
import Note from './Note';
import { Link } from 'react-router-dom';
import { CSVLink } from 'react-csv';
import { findDOMNode } from 'react-dom';
import { DropTarget } from 'react-dnd';

const cardTarget = {
    // canDrop(props, monitor) {
    //     const item = monitor.getItem();
    //     return canDropCard(item.fromPosition, props.position);
    // },

    hover(props, monitor, component) {
        const clientOffset = monitor.getClientOffset();
        const componentRect = findDOMNode(component).getBoundingClientRect();

        const isJustOverThisOne = monitor.isOver({shallow: true});

        const canDrop = monitor.canDrop();
    },

    // drop(props, monitor, component) {
    //     if (monitor.didDrop()) {
    //         return;
    //     }

    //     const item = monitor.getItem();

    //     CardActions.moveCard(item.fromPosition, props.position);

    //     return { moved: true };
    // }
};

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        isOverCurrent: monitor.isOver({shallow: true}),
        canDrop: monitor.canDrop(),
        itemType: monitor.getItemType()
    }
}

class NotesList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }

    render() {
        const { position } = this.props;
        const { isOver, canDrop, connectDropTarget } = this.props;
        return connectDropTarget(
            <div className="notesOuterDiv">
                <input type="text" name="searchText" onChange={this.props.filter} placeholder="Search titles and text"/>
                <h2 className="notesListTitle">Your Notes:</h2>
                <div className="notesInnerDiv">
                {this.props.notes.map(note => <Link to={`/notes/${note._id}`}><Note note={note} key={note._id} /></Link>)}
                </div>
                <div className="CSV"><CSVLink data={this.props.notes}>Download CSV of Notes</CSVLink></div>
            </div>
        )
    }
}

export default DropTarget('card', cardTarget, collect)(NotesList);