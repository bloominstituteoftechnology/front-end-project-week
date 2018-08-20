import React from 'react';


const Add = props => (
    <div>
    <form onSubmit={props.onSubmit}>
      <input
        name="title"
        placeholder="Title"
        onChange={props.onChange}
        value={props.title}
      />
      <textarea
        name="text"
        placeholder="Note"
        onChange={props.onChange}
        value={props.note}
      />
      <button>Save Note</button>
    </form>
  </div>   
);

export default Add;
