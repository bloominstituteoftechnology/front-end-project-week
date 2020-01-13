import React from 'react';

import axios from 'axios';
import SingleNote from './SingleNote';
//import {CSVLink, CSVDownload} from 'react-csv';


class NotesDisplay extends React.Component {
    constructor() {
        super();
        this.state = {
            notes : [],
            filteredNotes : '',
            filterparameter : ''
        }
    }//Constructor end..

    //ComponentDidMount to fetch data from API
    componentDidMount() {
        axios
            .get('https://fe-notes.herokuapp.com/note/get/all')
            .then(response => {
                    //console.log("response.dat Notes...  : ",response.data);
                    this.setState({ notes : response.data})
             })
            .catch(error => console.log(error))
    }

    inputChange = (event) => {
        this.setState({ [event.target.name] : event.target.value }, () => {
            let filteredNotes = this.state.notes.slice();
            console.log("++++++++ " ,filteredNotes);
            filteredNotes = filteredNotes.filter(note => 
                                                note.title.includes(this.state.filterparameter || note.textBody.includes(this.state.filterparameter)) 
                                                )
            return this.setState({filteredNotes : filteredNotes}, () =>  console.log(this.state.filteredNotes))
        })
    }

    render() {
        console.log("State from API .. ", this.state.notes);
        return (
            <div className = "note-display-maindiv">
                
                <div className = "notes-list-heading-search"> Your Notes : 
            
                <input className = "search-input"
                      placeholder = "Search..."
                      type = "text" 
                      name = "filterparameter"
                      value = {this.state.value} 
                      onChange = {this.inputChange}
                />
                </div>

                <h5 style = {{marginLeft: "62px"}}>Total Notes : {this.state.notes.length}</h5>

                <div className = "notes">
                    {(this.state.filteredNotes.length > 0 ? this.state.filteredNotes : this.state.notes).map((note, index) => 
                                                                                                                        <SingleNote  
                                                                                                                            key = {index}
                                                                                                                            data = {note}
                                                                                                                        />
                    )}
                </div>

                {/* <Route exact path = '/csv-file'  component = {<CSVDownload
                                                                    data = {this.state.notes.map(x => ({ title : x.title, textBody :  x.textBody })) }
                                                                    target = "_blank"  />}
                /> */}

                            
            </div>
        )
    }
}

export default NotesDisplay;
