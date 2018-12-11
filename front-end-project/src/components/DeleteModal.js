import React from "react";
import ReactDOM from 'react-dom'
import "./component.css"
import { withRouter } from "react-router";

const modalRoot = document.getElementById('modal-root')

class DeleteModal extends React.Component {
    constructor(props) {
        super(props)
    }

  el = document.createElement('div')
  componentDidMount() {
    modalRoot.appendChild(this.el)
  }
  componentWillUnmount() {
    modalRoot.removeChild(this.el)
  }
  render() {
    return ReactDOM.createPortal(
      <div
        style={{
          position: 'absolute',
          top: '0',
          bottom: '0',
          left: '0',
          right: '0',
          display: 'grid',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.3)',
        }}
       
      >
        <div
          style={{
            padding: 20,
            background: '#fff',
            borderRadius: '2px',
            display: 'inline-block',
            minHeight: '150px',
            margin: '1rem',
            position: 'relative',
            minWidth: '400px',
            boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
            justifySelf: 'center',
          }}
        >
          {this.props.children}
          <button onClick={()=> {this.props.deleteNote(this.props.note.id)
          this.props.history.push("/note-list/")
          }} className="deleteModal delete">Delete</button>
          <button onClick={this.props.onClose} className="deleteModal no">No</button>
        </div>
      </div>,
      this.el,
    )
  }
}
export default withRouter(DeleteModal);