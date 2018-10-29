import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DisplayNoteList from '../components/DisplayNoteList';
import DisplayNote from '../components/DisplayNote';

class DisplayNotesView extends React.Component {
    // add constructor and CDM
    constructor() {
    super();
    // this.state = {
    // items: []
    // };
        this.submitEdit = this.submitEdit.bind(this);
    }

    submitEdit = () =>{

    }
    
 
    render(){

        return(
            <Router>
            <div>
                    <Route
                    exact
                    path="/"
                    render={props => (
                        <DisplayNoteList  {...props}  notes={this.props.notes}  />
                    )}
                    />

                    <Route
                    path="/Notes/:id"
                    render={props => 
                    <DisplayNote {...props} 
                         notes={this.state.notes} 
                        submitEdit={this.submitEdit}
                        deleteNote={this.props.deleteNote}/>}
                    />
</div>
</Router>
        )

    }
}

    export default DisplayNotesView;