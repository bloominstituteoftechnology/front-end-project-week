import React from 'react';


export const CreateNote = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>
        <input value={props.title} type="text" placeholder="Note Title" name="title" onChange={props.handleChange} />
        <textarea value={props.content} type="text" name="content" placeholder="Note Content" onChange={props.handleChange}/>
        <button>Save</button>
      </form>
  )
}

