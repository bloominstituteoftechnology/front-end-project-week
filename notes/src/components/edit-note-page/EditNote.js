import React from 'react';

export const EditNote = (props) => {
  return (
    <div>
      <form>
        <input type='text' value={props.title} />
        <input type='text' value={props.note} />
      </form>
    </div>
  )
}
