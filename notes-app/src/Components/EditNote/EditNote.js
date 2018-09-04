import React, { Component } from 'react';
import './index.css';


class EditNote extends Component {
    render() {
        return (
            <div className='createView'>
                <form>
                <br /><br />
                    <input type ="text" />
                  <br /><br />
                    <textarea rows="20"/>
                    <br />
                    <button>Update</button>
                </form>
               
            </div>
        )
    }
}

export default EditNote;

