import React, { Component } from 'react';
import { Note } from '../Presentational';
import GridLayout from 'react-grid-layout';

export class YourNotes extends Component {




    render() {

        var layout2 = this.props.notes.map((note, index) => {return {i: note._id.toString(), x: (index) * 2, y: 0, w: 2, h: 6}});


        return (
            <article className="your-notes">
                <h2>Your Notes</h2>
                <GridLayout className="layout" layout={layout2} cols={12} rowHeight={30} width={1200}>
                {this.props.notes.map((note, id) => (
                    <div 
                    id={note._id.toString()} 
                    key={note._id.toString()}  
                    className="note"
                    >
                        <div className="note-container">
                            <h3>{note.title}</h3>
                            <p style={{fontSize:!this.props.match.params.id ? "14px" : '16px'}}>{note.textBody}</p>
                            {this.props.match.params.id ? <div className="button delete">Delete Me</div> : ""}
                            {this.props.match.params.id ? <div className="button update">Update Me</div> : ""}
                        </div>
                    </div>
                // <Note 
                // {...this.props} 
                // key={note._id.toString()} 
                // note={note} 
                // id={note._id.toString()}
                // />
                ))}
                </GridLayout>
            </article>
        )
    }
}

