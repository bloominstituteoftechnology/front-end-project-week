import React from 'react';

const CreateNew = (props) => {
    return(
        <div className="create-new">
            <h2>Create A New Note:</h2>
            <form onSubmit={props.submit}>

                <input 
                onChange={props.onChangeHandler}
                className="form-title"
                name="title" 
                type="text" 
                placeholder="Note Title" 
                />

                <input 
                onChange={props.onChangeHandler}
                className="form-content"
                name="textBody" 
                type="text" 
                placeholder="Note Content" 
                />

                <input 
                className="form-save"
                type="submit" 
                value="Save" 
                onClick={props.submit}
                />

            </form>
        </div>
    );
}

export default CreateNew;
