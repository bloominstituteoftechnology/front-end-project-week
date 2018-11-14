import React from 'react'; 
import './CreateNew.css'; 

export const CreateNew = () => {
    return(
      <div>
        <h3>Type Your Notes Here:</h3> 
        <form>
          <input placeholder="Note Title" className='input' type='text'/>
          <input placeholder="Note Content" className="text-area" type='text'/> 
        </form> 
      </div> 
    )
}