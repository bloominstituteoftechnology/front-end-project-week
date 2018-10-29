import React from 'react';

const CreateNew = (props) => {
    return(
        <div className="create-new">
            <h2>Create New Note:</h2>
            <form>
                <input name="title" type="text" placeholder="Note Title" />
                <input name="content" type="text" placeholder="Note Content" />
            </form>
        </div>
    );
}

export default CreateNew;