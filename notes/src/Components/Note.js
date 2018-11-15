import React from "react"

const Note = (props) => {
   console.log(props)
   return (
      <div>
         <h3>{props.note.title}</h3>
         <hr/>
         <p>{props.note.textBody}</p>
      </div>
   )
}

export default Note