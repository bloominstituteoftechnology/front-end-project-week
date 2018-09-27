import React from 'react';


function Editview(props) {

    return (
        <form className="Column-Layout">
        <h1>Edit Note:</h1>
            <input
                className="input-title"
                type="text"
                name="title"
                onChange={props.handleChange}
                value={props.title}
                placeholder="Edit Title"
                required
            />
            <textarea
                className="input-body"
                type="text"
                name="textbody"
                onChange={props.handleChange}
                value={props.textbody}
                placeholder="Edit Note Content"
                required
            />
            <h3 {...console.log(props.updateNote)} {...console.log(props.id)} onClick={props.updateNote}>Save Edit Changes</h3>
            
        </form>
    )
}



export default Editview;