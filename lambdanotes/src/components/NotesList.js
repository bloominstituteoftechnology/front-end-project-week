import React from 'react'

import { Link } from 'react-router-dom'

import { connect } from 'react-redux'
import { getNotes } from '../actions/noteAction'

//import NoteFilter from './NoteFilter'


//const NotesList = (props) => {
class NotesList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            notes: []
        }
    }

    componentDidMount(){
        this.props.getNotes()      //gets notes from actions, which comes from store
    }


    sortThings = (a, b) => {
        a = a.toLowerCase();
        b = b.toLowerCase();
        return a > b ? 1 : b > a ? -1 : 0;
    }
    

    render(){
        const emptyArr = [];
        const emptyArr2 = []
        console.log(this.props.notes)       //after componentDidMount, this actually renders data
        {this.props.notes.map(note => {
            console.log(note.title)
            emptyArr.push(note.title)
            console.log(emptyArr)
            emptyArr.sort(this.sortThings).join(", ") 
            console.log(emptyArr)
        })}
       
        
        return (
            <div className="noteslist-container">
                <h2> Your Notes: </h2>
                <div className="notebox-container">
                    {this.props.notes.map(note => {
                        return(
                            <div className="notebox" key={note._id}>
                                <h2>
                                    <Link to={`/notes/${note._id}`}>{note.title.toUpperCase()}</Link>
                                </h2>
                                <div className="contentbox">
                                    <p> {note.textBody}</p>
                                    <p> Tag: {note.tags}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                
                  

                <h2> THIRD: </h2>
                <div className="notebox-container">
                    {console.log(emptyArr)}
                    {emptyArr.map(e => {
                        return(
                            <div className="notebox">
                                <h2>
                                    {e.toUpperCase()}
                                </h2>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        notes: state.notes,
        error: state.error,
        loading: state.loading
    }
}

export default connect(mapStateToProps, { getNotes })(NotesList)
//export default NotesList


{/* <Link to={`/notes/${note._id}`}>{note.title.toUpperCase()}</Link> */}

// {emptyArr2.map(e => {
//     return e
// })}


// {/* <h2> Get Visible Notes: </h2>
// {/* <NoteFilter /> */}
// <div className="notebox-container">
// {this.props.notes.map(note => {
//     emptyArr.push(note.title)       //as EACH note.titles are coming in, push into emptyArr
//     emptyArr.sort(this.sortThings).join(", ")   
//     //console.log(emptyArr)           //emptyArr is sequentially being filled AND sorted
//     //console.log(note.title)
//     return (
//         <div className="notebox" key={note._id}>
//             {note.title}
//             <h4>{emptyArr}</h4>      {/* prints the WHOLE array out at once */}
//             <h5>test</h5>
//         </div>

//     )
// })}
// </div> */}