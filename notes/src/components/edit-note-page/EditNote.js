import React from 'react';

export const EditNote = (props) => {
  return (
    <div>
      <form>
        <input type='text' value={props.title} placeholder={props.title} />
        <input type='text' value={props.note} placeholder={props.note} />
        <button>Submit Changes</button>
      </form>
    </div>
  )
}
