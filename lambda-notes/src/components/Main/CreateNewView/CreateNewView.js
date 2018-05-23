import React from 'react';
import './CreateNewView.css';
import CreateNewViewContainer from '../../../containers/CreateNewViewContainer/CreateNewViewContainer';

const CreateNewView = (props) => { 
  console.log('CreateNewView', props)
  return (
    <div className="container">  
      <form onSubmit={() => this.handleSubmit()}>
        <div className="">
          <input type="text" name="title" className="form-control" placeholder="title" onChange={(el) => this.handleChange(el)}/>
          <textarea type="text" name="message" className="form-control" placeholder="message" onChange={(el) => this.handleChange(el)}/>
          <button className="btn btn-primary px-4 mt-2 float-left" type="submit"> Add </button>
        </div>
      </form>
    </div>
  );
}

export default CreateNewView;