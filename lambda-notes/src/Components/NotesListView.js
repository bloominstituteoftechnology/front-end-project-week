import React from 'react'; 
import { connect } from 'react-redux'; 
import { Link } from 'react-router-dom';    

class NotesListView extends React.Component {
    constructor(){
        super();
    }


    componentDidMount(){
        this.setState({
            notes: this.props.notes
        })
    }
    render(){
        return (
            <div className = "notes-list-view">
                <h2>Your Notes:</h2>
                <div className = "allNotes">
                    {this.props.notes.map(note => {
                        return(
                            <div  className = "note">
                                <Link key = {note.id} to = {`/notes/${note.id}`}>
                                
                                    <h3>{note.title}</h3>
                                    <hr />
                                    <p>{note.content}</p>
                                </Link>
                            </div>
                        )
                    })}
                </div>
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