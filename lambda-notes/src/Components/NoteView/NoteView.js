import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Link } from 'react-router-dom';
import "./Noteview.css";
import EditNote from '../EditNote/EditNote';
import DeleteModal from '../NoteView/DeleteModal';

class NoteView extends React.Component  {
    constructor(props){
        super(props);
        this.state = {
            note: [],
        };
    }
    componentDidMount() {
        console.log("CDM", props);
        const id = this.props.match.params.id
        this.fetchNote(id);
    }

    fetchNote = id =>{

        this.props.notes.map(item, () => {
            return(
            <div>
                <h1>{item.note_title}</h1>
                <p>{item.note_body}</p>
            </div>
            )
        })
    }

    render(){
        return (
            <div className = "note-wrapper">
                <Sidebar />
                <div className = "header-wrapper">
                    <header className = "noteview-header">
                        {/* <Link to ='/list/edit/:id' render= {(props)=> <EditNote {...props} notes = {notes} /> }/> */}
                        <DeleteModal className = "header-link">delete</DeleteModal><br/>


                        <h3>{this.props.note_title}</h3>

                        
                    </header>

                    </div>
            </div>
        )
    }
}
 

export default NoteView;
