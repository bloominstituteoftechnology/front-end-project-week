import React, { Component } from 'react';
import { Note } from '../Presentational';
import GridLayout from 'react-grid-layout';

export class YourNotes extends Component {




    render() {

        var layout = [
            {i: "1", x: 0, y: 0, w: 1, h: 2, static: true},
            {i: "2", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
            {i: "3", x: 4, y: 0, w: 1, h: 2}
          ];

        return (
            <article className="your-notes">
                <h2>Your Notes</h2>
                <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
                {this.props.notes.map((note, id) => (
                <Note 
                {...this.props} 
                key={note._id} 
                note={note} 
                id={id.toString()}
                />
                ))}
                </GridLayout>
            </article>
        )
    }
}

