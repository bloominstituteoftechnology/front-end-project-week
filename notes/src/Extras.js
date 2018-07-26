{/* import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';*/}

       {/* <div className="notes-box">
            <h3>Note Title</h3>
            <p className="note-p">Bunch of random words that mean nothing just here to fill space on boxes for MVP. Think I might need a few more. That oughta do it.</p>
            </div>
        <div className="notes-box">
            <h3>Note Title</h3>
            <p className="note-p">Bunch of random words that mean nothing just here to fill space on boxes for MVP. Think I might need a few more. That oughta do it.</p>
            </div>
            </div>
        <div className="row">
        <div className="notes-box">
            <h3>Note Title</h3>
            <p className="note-p">Bunch of random words that mean nothing just here to fill space on boxes for MVP. Think I might need a few more. That oughta do it.</p>
            </div>
        <div className="notes-box">
            <h3>Note Title</h3>
            <p className="note-p">Bunch of random words that mean nothing just here to fill space on boxes for MVP. Think I might need a few more. That oughta do it.</p>
            </div>
        <div className="notes-box">
            <h3>Note Title</h3>
            <p className="note-p">Bunch of random words that mean nothing just here to fill space on boxes for MVP. Think I might need a few more. That oughta do it.</p>
            </div>
            </div>
        <div className="row">
        <div className="notes-box">
            <h3>Note Title</h3>
            <p className="note-p">Bunch of random words that mean nothing just here to fill space on boxes for MVP. Think I might need a few more. That oughta do it.</p>
            </div>
        <div className="notes-box">
            <h3>Note Title</h3>
            <p className="note-p">Bunch of random words that mean nothing just here to fill space on boxes for MVP. Think I might need a few more. That oughta do it.</p>
            </div>
        <div className="notes-box">
            <h3>Note Title</h3>
            <p className="note-p">Bunch of random words that mean nothing just here to fill space on boxes for MVP. Think I might need a few more. That oughta do it.</p>
            </div>
            </div>
        </div>*/}

    return ({ <Modal 
           isOpen={this.state.showModal}
           contentLabel="onRequestClose Example"
           onRequestClose={this.handleCloseModal}
           className="Modal"
           overlayClassName="Overlay"/>

                   <div>
        {this.state.delete ? (
        <DeleteModal 
            handleDelete={this.handleDelete}
            handleCancel={this.handleCancel}/>
            ): null}
        {this.state.enableEdit ? (
        <div className="newnote-container">
        <header className="edit-delete">
          <span onClick={this.handleEditPerms}>edit</span>
          <span onClick={this.handleModal}>delete</span>
        </header>
        <h2>{note.title}</h2>
         <p>{note.textBody}</p>
         </div>
        ) : (
        )};
    </div>
    )};

    onChange={this.handleInput}
    value={this.state.body} 