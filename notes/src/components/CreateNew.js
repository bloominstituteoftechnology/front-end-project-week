import React from 'react';
import NoteList from './NoteList.js';

// const CreateNew = () => <h1>Create New Note</h1>;

const CreateNew = (props) => {
    // console.log(props);
return (
    
    <div>
        <input
            type="title"
            value={props.note}
            onChange={props.change}
        />
        <br/>
         <input
            type="text"
            value={props.note}
            onChange={props.change}
        />
        <button onClick={props.add}>Submit Note</button>
        <NoteList
            removeNote={props.remove}
            noteList={props.notes}
         />
    </div>
  );
};

export default CreateNew ;