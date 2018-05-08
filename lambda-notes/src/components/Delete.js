import React from 'react';



const DeleteModal = props => {
    return (
    <div className = "delete-modal">
        <p> Are you sure you want to delete this? </p>
        <button 
         style = {{background:'red',color:'white',width:'150px',height:'40px',marginRight:'25px'}}
         onClick = {props.deleteFunc}>
          Delete </button>
        <button
        style = {{background:'blue',color:'white',width:'150px',height:'40px'}} 
            onClick = {props.closeModal}> No </button>
    </div>
    )
}



export default DeleteModal