import React from 'react';

const CreateNote = () => {
    return (
        
        <form>
            <h4>Create New Note</h4>
            <div class="form-group">
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Note Title" />
            </div>
            <div class="form-group">
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="10" placeholder="Note Content"></textarea>
            </div>
            <button type="submit">Save</button>
        </form>


    )
}
 
export default CreateNote;