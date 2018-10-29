import React from 'react';

const CreateNew = (props) => {
    return(
        <div className="create-new">
            <h2>Create New Note:</h2>
            <form>
                <input 
                className="form-title"
                name="title" 
                type="text" 
                placeholder="Note Title" 
                />
                <input 
                className="form-content"
                name="content" 
                type="text" 
                placeholder="Note Content" 
                />
                <input 
                className="form-save"
                type="submit" 
                value="Save" />
            </form>
        </div>
    );
}

export default CreateNew;