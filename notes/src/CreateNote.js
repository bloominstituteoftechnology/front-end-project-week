import React from 'react';


export const CreateNote = (props) => {
  return (
      <form>
        <input value={props.title} type="text" placeholder="title" name="title" onChange={props.handleChange}/>
        <textarea value={props.content} type="text" name="content" placeholder="Put note here!" onChange={props.handleChange}/>
      </form>
  )
}

