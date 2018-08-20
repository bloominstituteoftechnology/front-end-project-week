import React from 'react'; 
import { connect } from 'react-redux'; 

class NotesListView extends React.Component {

    render(){
        return (
            <div className = "notes-list-view">
                <h2>Your Notes:</h2>
                {this.props.notes.map(note => {
                    return(
                        <div key = {note.id}className = "note">
                            <h3>{note.title}</h3>
                            <p>{note.content}</p>
                         </div>
                    )
                })}
            </div>
        )
    }
   
}

const mapPropsToState = (state) => {
    console.log(state.notes); 
    return{
        notes: state.notes
    }
    
}
export default connect(mapPropsToState)(NotesListView)