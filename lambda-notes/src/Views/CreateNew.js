import React from 'react';

const CreateNew = () => {
    return(
        <div>
            <form>
                <input type="text" name="title" placeholder="Note Title"/>
                <input type="text" name="body" placeholder="Note Content"/>
                <input type="submit" value="save" />
            </form>
        </div>
    )
}

export default CreateNew;