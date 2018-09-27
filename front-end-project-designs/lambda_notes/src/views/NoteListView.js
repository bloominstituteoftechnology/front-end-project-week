import React from 'react';
import { connect } from 'react-redux';

import { getNoteList } from '../store/actions';

import NoteList from '../components/NoteList.js';

class NoteListView extends React.Component {
    constructor(props){
        super(props);
        this.state={
            notesList:this.props.noteList
        }
    }

    componentDidMount() {    
        this.props.getNoteList();
    }

    render() {
        // console.log(this.props.noteList);   
        return ( 
            <div className="notelist-view-container">           
                {/* {()=>window.location.reload()} */}
                <NoteList {...this.props}/>


            </div>     
        );
    }
}

const mapStateToProps = state => ({
    noteList: state.notes
});

export default connect(mapStateToProps, { getNoteList })(NoteListView);
