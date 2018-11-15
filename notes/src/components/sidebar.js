import React from 'react';
import { Button }  from 'reactstrap'

function Sidebar(props) {

  return (
    <div className='noteContainer'>
    <Button color="info" size='lg'>View Your Notes</Button>
    <Button color="info" size='lg'>+Create Note</Button>



    </div>
  )
}

export default Sidebar