import React from 'react';
import { Link } from 'react-router-dom';

const EditBar= props => {

    return (
    <div>
    <Link to='/EditNoteForm'>
          edit
         </Link>
    </div>
    )
}
export default EditBar;
//   <EditNoteForm 

//editedNoteBodyHandler={this.editedNoteBodyHandler}
//editedNoteHandler={this.editedNoteBodyHandler}/>