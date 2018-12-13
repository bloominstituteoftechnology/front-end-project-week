import React from 'react';
import { Link } from 'react-router-dom';
import './ExpandedNote.css';
    
class ExpandedNote extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
    }

    toggleModal = () => {
        this.setState({ showModal: !this.state.showModal });
    }

    render() {
        return (
            <div className='expandedNote'>
                <div className='noteOptionsContainer'>
                    <Link className='noteOptions' to={`/editNote/${this.props.expandedNote.id}`}>edit</Link>
                    <div className='noteOptions' onClick={this.toggleModal}>delete</div>
                </div>
                <h1>{this.props.expandedNote.title}</h1>
                <p>{this.props.expandedNote.text}</p>
                <div className={this.state.showModal ? 'modal' : 'hidden'}>
                    <div className='modalMenu'>
                        <p>Are you sure you want to delete this?</p>
                        <div className='modalButtons'>
                            <button onClick={this.props.deleteNote} className='button deleteButton'>Delete</button>
                            <button onClick={this.toggleModal} className='button retreatButton'>Retreat</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ExpandedNote;
