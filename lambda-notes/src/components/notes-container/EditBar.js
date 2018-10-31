import React from 'react';
import { Link } from 'react-router-dom';

const EditBar= props => {
    return (
    <div>
    <Link to={`/EditNoteForm/${props.id}`}>
          edit
         </Link>
    </div>
    )
}
export default EditBar;
// `<Link to={/*javascript here*/}>{ /* javascript here */}</Link>
// so you can pass whatever you need 
// to into the Link as far as where it redirects to and what it says in the text
// so you can have the link's to attribute make use of the note id that way*/