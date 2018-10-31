import React from 'react'
import { NavLink } from 'react-router-dom'
import './View.css'




class View extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
        // this.Modal = this.Modal.bind(this)
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
              <NavLink exact to='/' ><button  onClick={() => this.props.deleteNote(this.props.note._id)} >Delete</button></NavLink>
              <button
                onClick={handleClose}
              >
                No
              </button>
            </section>
          </div>
        )
      }
    

    render() {
    return (
        <div>
            <div className='links'>
        <NavLink exact to={`/${this.props.note._id}/edit-note`} className='spacing' >edit</NavLink> 
                <this.Modal show={this.state.show} handleClose={this.hideModal} >
                    <p>Are you sure you want to delete this?</p>
                </this.Modal>
            <div className='spacing' onClick={this.showModal}>delete</div>
            </div>
        <div className='containNote'>
        <h1>{this.props.note.title}</h1>
        <div>{this.props.note.textBody}</div>
        </div>
        </div>
    )
    }
}

  

export default View;