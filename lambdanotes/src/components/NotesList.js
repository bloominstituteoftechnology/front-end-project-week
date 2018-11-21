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
            notes: [],
            // note_sortby_property: {
            //     outcome_of_sort: '',
            // }
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

    sortObjProperty = (list, key) => {
        const compare = (a, b) => {
            a = a[key];
            b = b[key];
            const type = (typeof(a) === 'string' || 
                        typeof(b) === 'string') ? 'string' : 'number';
            let result;
            if (type === 'string') result = a.localeCompare(b);    //sort A-Z
            else result = a - b;                                   //sort A-Z
            return result;
        }
        return list.sort(compare);
    }

    sortObjProperty2 = (list, key) => {
        const compare = (a, b) => {
            a = a[key];
            b = b[key];
            const type = (typeof(a) === 'string' || 
                        typeof(b) === 'string') ? 'string' : 'number';
            let result;
            if (type === 'string') result = b.localeCompare(a);   //reverses the order Z-A
            else result = b - a;                                  //reverses the order Z-A
            return result;
        }
        return list.sort(compare);
    }
    

    render(){
   
        const emptyArr3 = [];
        const emptyArr5 = [];
        const emptyArr7 = [];

        //sort array of objects by object keys - javascript list sorting by object property

        //A-Z
        {this.props.notes.map(note => {
            emptyArr3.push(note)
            let emptyArr4 = this.sortObjProperty(emptyArr3, 'title');
        })}

        //Z-A
        {this.props.notes.map(note => {
            emptyArr5.push(note)
            let emptyArr6 = this.sortObjProperty2(emptyArr5, 'title');
        })}

        //ID
        {this.props.notes.map(note => {
            emptyArr7.push(note)
            let emptyArr8 = this.sortObjProperty(emptyArr3, '_id');
        })}


        
        return (
            <div className="noteslist-container">
                <h2> Your Notes (Unsorted): </h2>
                <div className="notebox-container">
                    {this.props.notes.map(note => {
                        return(
                            <div className="notebox" key={note._id}>
                                <h2>
                                    <Link to={`/notes/${note._id}`}>{note.title.toUpperCase()}</Link>
                                </h2>
                                <div className="contentbox">
                                    <p> {note.textBody.slice(0, 100) + (note.textBody.length > 100 ? "..." : "")}</p>
                                    <p> Tag: {note.tags}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                
                  

                <h2> A-Z: </h2>
                <div className="notebox-container">
                    {this.sortObjProperty(emptyArr3, 'title').map(obj => {
                        return(
                                <div className="notebox" key={obj._id}>
                                    <h2>
                                        Title: <Link to={`/notes/${obj._id}`}>{obj.title.toUpperCase()}</Link>
                                    </h2>
                                    <div className="contentbox">
                                        <p> {obj.textBody.slice(0, 100) + (obj.textBody.length > 100 ? "..." : "")}</p>
                                    </div>
                                </div>
                            ) 
                    })}
                </div>

                <h2> Z-A: </h2>
                <div className="notebox-container">
                    {this.sortObjProperty2(emptyArr5, 'title').map(obj => {
                        return(
                                <div className="notebox" key={obj._id}>
                                    <h2>
                                        Title: <Link to={`/notes/${obj._id}`}>{obj.title.toUpperCase()}</Link>
                                    </h2>
                                    <div className="contentbox">
                                        <p> {obj.textBody.slice(0, 100) + (obj.textBody.length > 100 ? "..." : "")}</p>
                                    </div>
                                </div>
                            ) 
                    })}
                </div>

                <h2> BY ID: </h2>
                <div className="notebox-container">
                    {this.sortObjProperty2(emptyArr7, '_id').map(obj => {
                        return(
                                <div className="notebox" key={obj._id}>
                                    <h2>
                                        Title: <Link to={`/notes/${obj._id}`}>{obj.title.toUpperCase()}</Link>
                                    </h2>
                                    <div className="contentbox">
                                        <p> {obj.textBody.slice(0, 100) + (obj.textBody.length > 100 ? "..." : "")}</p>
                                        <p> ID: {obj._id} </p>
                                    </div>
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
        loading: state.loading,
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

// {this.props.notes.map(note => {
//     console.log(note.title)
//     console.log(note._id)
//     emptyArr.push(note.title)
//     emptyArr2.push(note._id)
//     console.log(emptyArr)
//     console.log(emptyArr2)
//     emptyArr.sort(this.sortThings).join(", ") 
//     emptyArr2.sort(this.sortThings).join(", ")
//     console.log(emptyArr)
//     console.log(emptyArr2)
// })}