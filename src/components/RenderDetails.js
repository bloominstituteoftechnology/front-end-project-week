import React from 'react'

const RenderDetails = (props) => {
  console.log('props', props)

  return (
    <div onClick={props.editToggle} className='detail-div'>
      <h1 className='title-header'>{props.note.title}</h1>
      <p className='noteBody'>{props.note.context}</p>
      {/* {props.tags.map((tag, index) => {
        return (
          <div className='fas fa-tags' key={tag + index}>
            {tag}
          </div>
        )
      })} */}
    </div>
  )
}
export default RenderDetails
