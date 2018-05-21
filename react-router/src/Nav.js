import React, {Component}  from 'react';
import NavLink from 'react-router-dom';
import LeftColumnPanel from './LeftColumnPanel';
import NoteDisplay from './NoteDisplay';

  class Nav extends Component {
        render() {
		    return (
          <div className="Home">
            <LeftColumnPanel />
            <div className="Notes">
            <h3 className="Note-title"> Your Notes: </h3>
            {this.props.notes.map((note, i) => {
                return (
                <NoteDisplay key={i} notetitle={note.Title} noteContent={note.Content} />
              );
            })}
        </div>
       </div>
      )
    }
 }
export default Nav;
