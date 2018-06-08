import React from 'react';
import {dummydata as notes} from '../../dummydata/dummydata';
import './NoteCardList.css';
import NoteCards from '../NoteCard/NoteCard';

// function mapStateToProps(state) {
//     return {
//         state:state.notes
//     };
// }



const NoteCardList = (props)=>{
    return(
        <div className = "main-container">
            
            <NoteCards notes={notes}/>
        </div>
    );
}




export default NoteCardList;