import React from 'react'

const Form = props => {
    return (
        <form onSubmit={props.submit}>
            <input 
                defaultValue={props.title}
                onChange={props.handleInputChange}
                className="title"
                placeholder="Note Title"
                type="text"
                name="title"
            />
            <input 
                defaultValue={props.textBody}
                onChange={props.handleInputChange}
                className="content"
                placeholder="Note Content"
                type="text"
                name="content"
            />
            <input 
                type="submit"
            />
        </form>
    )
}

export default Form