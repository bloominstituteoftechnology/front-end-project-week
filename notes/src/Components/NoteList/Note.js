import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/*
 * Display each note block for use on the main note list.
 *
 * Takes in props:
 * id: ""
 * title: ""
 * textBody: ""
 */

 const Note = (props) => {
   /* Truncating via code instead of CSS */
   let propText = props.textBody;
   const text = propText.length > 125 ?
      propText.substring( 0, 120 ) + "..." :
      propText;
      

   return (
    <Link to={`/note/${props.id}`} className="note">
      <h3 className="noteTitle">{props.title}</h3>
      <div className="noteText">{text}</div>
    </Link>
   );
 };

 // Double check to make sure we have all of the correct values passed as props
 Note.propTypes = {
   id: PropTypes.string.isRequired,
   title: PropTypes.string.isRequired,
   textBody: PropTypes.string.isRequired
 };

 export default Note;