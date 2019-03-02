import React from 'react';


const CreateNote = ({handleInputChange , handleCreateNote}) => {
  return (
    <form class="form-newnote" onSubmit={handleCreateNote}>
    <h2 className="formtitle">Create New Note :</h2>
  <div class="form-group ">
  
    <input type="text" class="form-control"  
     placeholder="Note Title" name ='title' onChange={handleInputChange}/>
  </div>
  
  <div class="form-group">
    <textarea class="form-control textarea"  placeholder="Note Content" name ="textBody" onChange={handleInputChange}></textarea>
  </div>


  <button type="submit" className="btn bt btngrey bb4">Submit</button>

</form>
   
  

   
  );
};

CreateNote.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default CreateNote;


/*
<div class="card bg-light mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Light card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>*/