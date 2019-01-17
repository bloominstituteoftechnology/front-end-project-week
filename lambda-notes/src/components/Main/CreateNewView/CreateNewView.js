import React from 'react';
import './CreateNewView.css';

const CreateNewView = (props) => { 
  console.log('CreateNewView', props)
  return (
    <div className="container">  
      <form onSubmit={() => this.handleSubmit()}>
        <div className="float-left">
          <h4 className="text-left edit-header mb-4" > Create New Note: </h4>
          
          <input type="text" name="title" className="form-control mb-3" placeholder="New Title" onChange={(e) => props.handleChange(e)} />
          
          <textarea type="text" name="message" rows="15" cols="50" className="form-control text-area" placeholder="New Message" onChange={(e) => props.handleChange(e)} />
          
          <button className="btn btn-primary mt-2 float-left ml-0" type="submit" onClick={props.addNote}> Save </button>
        </div>
      </form>
    </div> 
  );
}

export default CreateNewView;