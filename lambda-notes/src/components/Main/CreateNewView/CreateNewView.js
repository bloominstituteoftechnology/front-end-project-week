import React from 'react';
import './CreateNewView.css';
import CreateNewViewContainer from '../../../containers/CreateNewViewContainer/CreateNewViewContainer';

const CreateNewView = (props) => { 
  console.log('CreateNewView', props)
  return (
    <div className="container">  
      <form onSubmit={() => this.handleSubmit()}>
        <div className="float-left">
          <h4 className = "text-left edit-header" > Edit Note: </h4>
          <input type="text" name="title" className="form-control mb-3" placeholder="title" onChange={(el) => this.handleChange(el)}/>
          <textarea type="text" name="message" rows="15" cols="50" className="form-control text-area" placeholder="message" onChange={(el) => this.handleChange(el)}/>
          <button className="btn btn-primary px-4 mt-2 float-left ml-0" type="submit"> Update </button>
        </div>
      </form>
    </div>
  );
}

export default CreateNewView;