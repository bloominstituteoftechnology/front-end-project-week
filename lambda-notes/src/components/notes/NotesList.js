import React, { Component } from 'react';
import dummyData from '../app/dummyData';
import Note from './Note';


class NotesList extends Component {
    constructor(props) {
        super(props) ;
    }
    render() {
        console.log('from notesList',this.props);        
        return(
            <div className="notes-list">
                {this.props.data.map((mapNote, index) => {

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