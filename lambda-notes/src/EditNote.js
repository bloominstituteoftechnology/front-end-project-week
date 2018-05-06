import React from 'react';
import { Button } from 'reactstrap';
import Buttons  from './Buttons';
import './NewNote.css';
import './Buttons.css';

class EditNote extends React.Component {
    render() {
      return (
        <div>
          <div>        
            <div className="row no-gutters">
                <div className="sideBar col-2">
                    <span className="lambdaNotes">Lambda <br /> Notes</span>
                        <span className="buttons"><Buttons /></span>
                </div>
                    <div className="noteSection col-md-10">
                        <span className="yourNotes">Edit Note:</span>            
                            <form className="Form">
                                <input className="noteTitle" type="text" name="title" placeholder="Note Title" /><br />
                                <p><textarea className="noteContent" cols="60" rows="10" placeholder="Note Content"></textarea></p>                              
                                    <Button className="BTN btn btn-info" type="submit">Update</Button>                            
                            </form>  
                    </div>  
                </div>
            </div>               
        </div>
      );
    }
  }
  
  export default EditNote;