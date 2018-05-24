import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './SingleNoteView.css';

class SingleNoteView extends Component {
  render() {
    return (
      <div>
        <div className="links">
            <Link to="/editNote" className="edit">Edit</Link>            
            <Link to="/deleteNote" className="delete">Delete</Link>
        </div>
        <div>
            <h2 className="headerNotes">Note Name</h2>
            <p className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet elit imperdiet, volutpat sapien aliquet, condimentum libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin ac velit massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur luctus massa in sodales lacinia. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin aliquet ipsum et arcu sollicitudin ornare. Nulla egestas consequat pellentesque. Proin accumsan maximus congue. Nulla eget varius mauris. Integer suscipit ex in semper tristique. Nam in tincidunt libero.
            <br />
            <br />        
            Curabitur et tortor blandit, posuere dolor in, placerat orci. Sed vestibulum accumsan volutpat. Nullam pharetra, sapien in feugiat bibendum, sem turpis consectetur velit, at finibus massa metus rutrum mauris. Nunc in mi nisi. Aenean finibus ex non ipsum scelerisque, placerat vestibulum nulla tempus. Vestibulum ut fringilla massa. Fusce quis viverra ante. Vestibulum scelerisque lacus eros, vel accumsan felis condimentum eget. Vestibulum a mi a massa bibendum porta in in libero. Nam tincidunt faucibus erat, nec placerat leo scelerisque ut. Maecenas posuere quam odio, sit amet tincidunt massa pellentesque non. In porta mauris vitae magna placerat ornare.</p>
        </div>
      </div>
    );
  }   
}

export default SingleNoteView;