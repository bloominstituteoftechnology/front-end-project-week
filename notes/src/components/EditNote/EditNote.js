import React, { Component } from 'react';
// import './index.css';

class EditNote extends Component {
  render() {
      return (
          <div>
              <div className='content-header'>
                  <h2>Edit Note:</h2>
              </div>
              <div className='form'>
              <input className='title-input'
                  type='text'
                  name='title'
                  placeholder='Note Title'
              />
              <textarea className='content-input'
                  type='text'
                  name='content'
                  placeholder='Note Content'
              />
              <button className='btn form-btn'>Save</button>
              </div>
          </div>
      );
  }
}

export default EditNote;