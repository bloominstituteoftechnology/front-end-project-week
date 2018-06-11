import React from 'react';
import './EditView.css';
import '../Main.css'

const EditView = (props) => { 
  console.log('EditView', props)
  return (
    <div className="main-container">  
      <form onSubmit={() => this.handleSubmit()}>
        <div className="float-left">
          <h4 className="text-left edit-header mb-4" > Edit Note: </h4>
          <input type="text" name="title" className="form-control mb-3" placeholder="Note Title" onChange={(el) => this.handleChange(el)}/>
          <textarea type="text" name="message" rows="15" cols="50" className="form-control text-area" placeholder="Note Message" onChange={(el) => this.handleChange(el)}/>
          <button className="btn btn-primary mt-2 float-left ml-0" type="submit"> Update </button>
        </div>
      </form>
    </div>
  );
}

export default EditView;