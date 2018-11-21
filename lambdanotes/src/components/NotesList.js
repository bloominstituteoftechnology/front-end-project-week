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

    
    // sortAscending = () => {
    //     //have different functions that sort in different ways, then setState by different sort
    //     this.setState({outcome_of_sort: ascending })
    // }
    //then CALL those states for display

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
        const emptyArr = [];
        const emptyArr2 = [];
        const emptyArr3 = [];
        let emptyArr4
        const emptyArr5 = [];
        let emptyArr6
        console.log("FROM PROPS", this.props.notes)       //after componentDidMount, this actually renders data
        console.log("FROM STATE", this.state.notes)
        //i need to push the entire object note into emptyArr
        //sort array of objects by object keys - javascript list sorting by object property

        {this.props.notes.map(note => {
            console.log(note.title)
            console.log(note._id)
            emptyArr.push(note.title)
            emptyArr2.push(note._id)
            console.log(emptyArr)
            console.log(emptyArr2)
            emptyArr.sort(this.sortThings).join(", ") 
            emptyArr2.sort(this.sortThings).join(", ")
            console.log(emptyArr)
            console.log(emptyArr2)
        })}

        //A-Z
        {this.props.notes.map(note => {
            emptyArr3.push(note)
            console.log(emptyArr3)
            console.log(this.sortObjProperty(emptyArr3, 'title'))
            let emptyArr4 = this.sortObjProperty(emptyArr3, 'title');
            console.log(emptyArr4)
        })}

        //Z-A
        {this.props.notes.map(note => {
            emptyArr5.push(note)
            console.log(emptyArr5)
            console.log(this.sortObjProperty2(emptyArr5, 'title'))
            let emptyArr6 = this.sortObjProperty2(emptyArr5, 'title');
            console.log(emptyArr6)
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
                                    <p> {note.textBody}</p>
                                    <p> Tag: {note.tags}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                
                  

                <h2> A-Z: </h2>
                <div className="notebox-container">
                    {console.log(emptyArr)}
                    {console.log(emptyArr4)}
                    {this.sortObjProperty(emptyArr3, 'title').map(obj => {
                        return(
                                <div className="notebox">
                                    <h2>
                                        Title: <Link to={`/notes/${obj._id}`}>{obj.title.toUpperCase()}</Link>
                                    </h2>
                                    <div className="contentbox">
                                        <p> {obj.textBody}</p>
                                    </div>
                                </div>
                            ) 
                    })}
                </div>

                <h2> Z-A: </h2>
                <div className="notebox-container">
                    {this.sortObjProperty2(emptyArr5, 'title').map(obj => {
                        return(
                                <div className="notebox">
                                    <h2>
                                        Title: <Link to={`/notes/${obj._id}`}>{obj.title.toUpperCase()}</Link>
                                    </h2>
                                    <div className="contentbox">
                                        <p> {obj.textBody}</p>
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
    console.log(state.notes)
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