import React from 'react'


class DeleteModal extends React.Component {

    render() {
        const title = this.props.location.state.title
        const content = this.props.location.state.content
        const index = this.props.location.state.index
        return (

            <div className = "create-note-form ">
                <div className = "full-note-header">
                {/* <Link to = {`/${this.props.match.params.id}/edit-note`} ><h6>edit</h6></Link> */}

                <h6>edit</h6> 
                <h6>delete</h6>
                </div>
                <div className = "content-div">
                <h3>{title}</h3> 
                <p>{content}</p>
                </div>
                <div className ="delete-question">
                    <h6>Are you sure you want to delete this?</h6>
                    <button className = "btn-side-bar btn-delete">Delete</button>
                    <button className = "btn-side-bar">No</button>
                </div>
            </div>
            
        )
    }
}

export default DeleteModal;