import React, { Component } from 'react';
import dummyData from '../app/dummyData';
import Note from './Note';


class NotesList extends Component {
    constructor() {
        super() ;
        this.state = { dummyData }
    }
    render() {
        return(
            <div className="notes-list">
                {this.state.dummyData.map((mapNote, index) => {
                    return(
                        <Note
                            mapNote={mapNote}
                            key={index * 10000}
                        />
                    )
                })}
            </div>
        )
    }
}
export default NotesList ;