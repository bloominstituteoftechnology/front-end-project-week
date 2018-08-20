import React from 'react'


class DeleteModal extends React.Component {

    render() {

        return (
            <div className ="delete-question">

              <h6>Are you sure you want to delete this?</h6>
              <button className = "btn-side-bar btn-delete">Delete</button>
              <button className = "btn-side-bar">No</button>
            
            </div>
        )
    }
}

export default DeleteModal;