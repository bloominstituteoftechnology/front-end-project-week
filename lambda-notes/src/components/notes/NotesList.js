import React, { Component } from 'react';
import dummyData from '../app/dummyData';
import {connect} from 'react-redux';
import Note from './Note';


class NotesList extends Component {
    constructor(props) {
        super(props) ;
    }
    render() {
        console.log('from nl',state)
        return(
            <div>list</div>
            
            // <div className="notes-list">
            //     {this.props.data.map((mapNote, index) => {

            //         return(
            //             <Note
            //                 mapNote={mapNote}
            //                 key={index * 10000}
            //             />
            //         )
            //     })}
            // </div>
        )
    }
}
// const mapStateToProps = state {
//     return{
//         notes: state.notes
//     }
// }
// export default connect (mapStateToProps)(NotesList) ;
export default NotesList;