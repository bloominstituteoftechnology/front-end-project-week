import React from 'react';
import Note from './Note';
import { CSVLink } from "react-csv";

const headers = [
  { label: "Note ID", key: "_id" },
  { label: "Title", key: "title" },
  { label: "Text", key: "textBody" },
  { label: "Tags", key: "tags"}
];

class PropDataUpdatedCSVLink extends CSVLink {
	constructor(props) {
        super(props);
        this.state = {};
	}

	componentWillReceiveProps(nextProps) {
		const { data, headers, separator, uFEFF } = nextProps;
		this.setState({ href: this.buildURI(data, uFEFF, headers, separator) });
	}
}

let Notes = props => {
    return (
        <div className="container"> 
            <h1>Your Notes:</h1>
            {props.notes ? <PropDataUpdatedCSVLink className='download' data={props.notes} headers={headers} filename={"VellumNotes.csv"}> Download All </PropDataUpdatedCSVLink> : null }
            <div className='notes'>
                {props.notes.map(note => <Note key={note._id} note={note} deleteHandler={props.deleteHandler}/>)}
            </div>
        </div>  
    )
}

export default Notes;