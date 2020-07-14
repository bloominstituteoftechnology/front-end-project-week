import React from 'react';
import { connect } from 'react-redux';

import { getNoteList } from '../store/actions';

import NoteList from '../components/NoteList.js';

class NoteListView extends React.Component {
    constructor(props){
        super(props);
        this.state={
            notesList: this.props.noteList,
            actionTookPlace: this.props.actionTookPlace
        }
    }

    componentDidMount() {    
        this.props.getNoteList();
    }

    handleActionTookPlace(){
        if (this.props.actionTookPlace !== this.state.actionTookPlace) {
            this.props.getNoteList();
        }
    }

    render() { 
        return ( 
            <div className="notelist-view-container"
                 >  
                 {this.handleActionTookPlace()}      
                {/* {console.log("Props: "+this.props.actionTookPlace)}
                {console.log("State: "+this.state.actionTookPlace)} */}
                <NoteList {...this.props}/>
            </div>     
        );
    }
}

const mapStateToProps = state => ({
    noteList: state.notes,
    actionTookPlace: state.actionTookPlace
});

export default connect(mapStateToProps, { getNoteList })(NoteListView);
