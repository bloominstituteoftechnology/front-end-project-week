import React from 'react';
import Note from './Note'

const ListNotes = ({notes}) => {
  return (
      <ul className='cardListNotes  bb5 '>
      {notes.map((n,i) =>{
         return (
         <Note key ={i} {...n}  />
         
         )})}
 
 </ul>
   
  );
};

ListNotes.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default ListNotes;


