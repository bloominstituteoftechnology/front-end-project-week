import React from 'react'
import { NavLink } from 'react-router-dom'
import './View.css'




class View extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }

    showModal = () => {
        this.setState({ show: true })
    }

    hideModal = () => {
        this.setState({ show: false })
    }
    
     Modal = ({ handleClose, show, children }) => {
        const showHideClassName = show ? 'display-block' :  'display-none';
      
        return (
          <div className={showHideClassName}>
            <section className='modal-main'>
              {children}
              <div className='buttonDiv'>
              <NavLink exact to='/' ><p  onClick={() => this.props.deleteNote(this.props.note.id, this.props.note.userId)} className='modalButton1'>Delete</p></NavLink>
              <p onClick={handleClose} className='modalButton2'>No</p>
              </div>
            </section>
          </div>
        )
      }
    

    render() {
    return (
        <div>
            <div className='links'>
        <NavLink exact to={`/${this.props.note.id}/edit-note`} className='spacing' >edit</NavLink> 
                <this.Modal show={this.state.show} handleClose={this.hideModal} >
                    <p>Are you sure you want to delete this?</p>
                </this.Modal>
            <div className='spacing' onClick={this.showModal}>delete</div>
            </div>
        <div className='containNote'>
        <h1>{this.props.note.title}</h1>
        <div>{this.props.note.content}</div>
        </div>
        </div>
    )
    }
}

  

export default View;