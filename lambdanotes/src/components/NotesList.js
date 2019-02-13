import React from 'react'

import { Link, Route } from 'react-router-dom'

import { connect } from 'react-redux'
import { getNotes } from '../actions/noteAction'

//import NoteFilter from './NoteFilter'
import SearchBar from './SearchBar'
import DisplayData from './DisplayData'


//const NotesList = (props) => {
class NotesList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            notes: [],
            showNoteContainer: false,
            sortBy: '',
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

    myFunction = () => {
        let x = document.getElementById("myDIV")
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none"
        }
    }

    myFunctionAZ = () => {
        let x = document.getElementById("myDIV2")
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none"
        }
    }

    myFunctionZA = () => {
        let x = document.getElementById("myDIV3")
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none"
        }
    }

    myFunctionID = () => {
        let x = document.getElementById("myDIV4")
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none"
        }
    }

    filterNote = str => {
        const notes = this.props.notes;
        const filterednote = notes.filter((note) => {
            return note.title.includes(str)
        })
        this.setState({notes: filterednote})
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
            let emptyArr8 = this.sortObjProperty(emptyArr3, 'id');
        })}


        //put the buttons to links - to - ROUTES
        //each filter result is a separate component 
        //all those filter components must connect to store through mapStateToProps
        //
        


        return (
            <div className="noteslist">


            
    
            <SearchBar filterNote={this.filterNote}/>
            <DisplayData dummyData={this.state.notes}/>




            {/* <div id="myDIV" style={{display: this.state.showNoteContainer ? 'block' : 'none' }}>
                <h2> Your Notes (Unsorted): </h2>
                <div className="notebox-container">
                    {this.props.notes.map(note => {
                        return(
                            <div className="notebox" key={note.id}>
                                <h2>
                                    Title: <Link to={`/notes/${note.id}`}>{note.title.toUpperCase()}</Link>
                                </h2>
                                <div className="contentbox">
                                    <p> <strong>Content:</strong> {note.textBody.slice(0, 100) + (note.textBody.length > 100 ? "..." : "")}</p>
                                </div>
                                <p> <strong>ID:</strong> {note.id}</p>
                            </div>
                        )
                    })}
                </div>
            </div> */}
                
            
            {/* <div id="myDIV2" style={{display: this.state.showNoteContainer ? 'block' : 'none' }}>
                <h2> A-Z: </h2>
                <div className="notebox-container">
                    {this.sortObjProperty(emptyArr3, 'title').map(obj => {
                        return(
                                <div className="notebox" key={obj.id}>
                                    <h2>
                                        Title: <Link to={`/notes/${obj.id}`}>{obj.title.toUpperCase()}</Link>
                                    </h2>
                                    <div className="contentbox">
                                        <p> <strong>Content:</strong> {obj.textBody.slice(0, 100) + (obj.textBody.length > 100 ? "..." : "")}</p>
                                    </div>
                                    <p> <strong>ID:</strong> {obj.id}</p>
                                </div>
                            ) 
                    })}
                </div>
            </div> */}

            {/* <div id="myDIV3" style={{display: this.state.showNoteContainer ? 'block' : 'none' }}>
                <h2> Z-A: </h2>
                <div className="notebox-container">
                    {this.sortObjProperty2(emptyArr5, 'title').map(obj => {
                        return(
                                <div className="notebox" key={obj.id}>
                                    <h2>
                                        Title: <Link to={`/notes/${obj.id}`}>{obj.title.toUpperCase()}</Link>
                                    </h2>
                                    <div className="contentbox">
                                        <p> <strong>Content:</strong> {obj.textBody.slice(0, 100) + (obj.textBody.length > 100 ? "..." : "")}</p>
                                    </div>
                                    <p> <strong>ID:</strong> {obj.id}</p>
                                </div>
                            ) 
                    })}
                </div>
            </div> */}

            {/* <div id="myDIV4" style={{display: this.state.showNoteContainer ? 'block' : 'none' }}>
                <h2> BY ID: </h2>
                <div className="notebox-container">
                    {this.sortObjProperty2(emptyArr7, 'id').map(obj => {
                        return(
                                <div className="notebox" key={obj.id}>
                                    <h2>
                                        Title: <Link to={`/notes/${obj.id}`}>{obj.title.toUpperCase()}</Link>
                                    </h2>
                                    <div className="contentbox">
                                        <p> <strong>Content:</strong> {obj.textBody.slice(0, 100) + (obj.textBody.length > 100 ? "..." : "")}</p>    
                                    </div>
                                        <p> <strong>ID:</strong> {obj.id} </p>
                                </div>
                            ) 
                    })}
                </div>
            </div> */}
            
            </div> //className="noteslist-container"
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


//Original Buttons
            // <div 
            //     className="menu"
            //     ref={(element) => {
            //         this.dropdownMenu = element;
            //     }}
            // >
            //     <button onClick={this.myFunction}> Your Notes (Unsorted) </button>
            //     <button onClick={this.myFunctionAZ}> A-Z </button>
            //     <button onClick={this.myFunctionZA}> Z-A </button>
            //     <button onClick={this.myFunctionID}> ID </button>
            // </div>





//ERIC suggestion store sortBy in local react state

{/* <select 
value={}
onChange={(element) => {
    this.dropdownMenu = element;
}}
>
    <option onClick={this.myFunction}> Your Notes (Unsorted) </option>
    <option onClick={this.myFunctionAZ}> A-Z </option>
    <option onClick={this.myFunctionZA}> Z-A </option>
    <option onClick={this.myFunctionID}> ID </option>
</select>  */}


