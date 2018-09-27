import React, { Component } from 'react';
import { Note } from '../Presentational';
import GridLayout from 'react-grid-layout';

export class YourNotes extends Component {

    state = {};

    fontSizeTest = (length) => { 
        
    if (length <= 8) {
        return '4.8rem';
    } else if (length <= 20) {
        return '3.6rem';
    } else if(length <= 60){
        return '2.4rem';
    } else if (length <= 80) {
        return '1.8rem';
    } else if (length >= 80) {
        return '1.4rem'
    }}

    noteMarkdownConverter = new this.props.showdown.Converter({emoji: true, headerLevelStart: 4, simplifiedAutoLink: true, tasklists: true});


    render() {
        // Need to figure out a way to get layout2 out of this render function. Maybe in state.
        // onClick={() => this.props.history.push(`notes/note/${note._id}`)}
        let layout2 = this.props.notes.filter(
            note => (note.title + " " + note.textBody + " " + note.tags).toLowerCase().includes(`${this.props.currentSearch.sidebarSearch}`.toLowerCase())).map(
                (note, index) => {return {i: note._id ? note._id.toString() : '', x: (index % 6) * 3, y: Infinity, w: 3, h: 6, minH: 6, minW: 2}});

        return (
            <article className="your-notes">
                <GridLayout className="layout" layout={layout2} cols={18} rowHeight={30} width={1550} margin={[15, 15]} compactType="vertical">
                {this.props.notes.filter(
                    note => (note.title + " " + note.textBody + " " + note.tags).toLowerCase().includes(`${this.props.currentSearch.sidebarSearch}`.toLowerCase())).map(
                        (note, id) => (
                            <div id={GridLayout.state} className="note" key={note._id.toString()} 
                            onDoubleClick={() => this.props.history.push(`notes/note/${note._id}`)}
                            >
                                <Note 
                                {...this.props} 
                                key={note._id.toString()} 
                                note={note} 
                                id={note._id.toString()} 
                                fontSizeTest={this.fontSizeTest}
                                noteMarkdownConverter={this.noteMarkdownConverter}
                                />
                            </div>

                ))}
                </GridLayout>
            </article>
        )
    }
}

