import React from 'react'; 
import { connect } from 'react-redux'; 
import { Link } from 'react-router-dom';    

class NotesListView extends React.Component {
    constructor(){
        super();
        this.state = {
            notes: []
        } 
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
                {this.state.notes.map(note => {
                    return(
                        <Link key = {note.id} to = {`/notes/${note.id}`}>
                        <div  className = "note">
                            <h3>{note.title}</h3>
                            <p>{note.content}</p>
                         </div>
                         </Link>
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