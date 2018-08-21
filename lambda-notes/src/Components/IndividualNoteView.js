import React, {Component} from 'react'; 
import { connect } from 'react-redux'; 
import { getNote } from '../actions'; 

class IndividualNoteView extends Component{
    constructor(){
        super(); 
    }

    componentDidMount(){
        const id = parseInt(this.props.match.params.id)
        this.props.getNote(id)
    }
    
    render(){ 
        return (
            <div key = {this.props.currentNote.id} className= "note">
                <h2>{this.props.currentNote.title}</h2>
                <p>{this.props.currentNote.content}</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        notes: state.notes,
        currentNote: state.currentNote
    }
}

export default connect(mapStateToProps, {getNote})(IndividualNoteView); 