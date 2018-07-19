import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ModalComponent  from '../ModalComponent/ModalComponent';
import { connect } from 'react-redux';
import { displayingNote, deletingNote } from '../../actions';
import './index.css';

class SingleNoteView extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            modalForm: false,
         }
    }

    componentDidMount() {
        const  { id }  = this.props.match.params;
       
        // this.props.displayingNote(id)
    }

    popModal = () => {
        this.setState({ modalForm: !this.state.modalForm })
    }
    handleNo = () => {
        this.setState({ modalForm: !this.state.modalForm })
        // setTimeout(() => {
        //     this.props.history.push("/");
        // }, 600);
    }
    handleDelete = () => {
        const id = this.props.match.params.id
        console.log(' id : ', id);
        this.props.deletingNote(id)
            this.props.history.push("/");
    }

    render() { 
        console.log(' any props in single view note?: ', this.props)
        return ( 
            <div>
                
                    <div className='editDeleteLinks'>
                        <Link className='editDeletelink' to={`/note/edit/${this.props.match.params.id}`}>edit</Link>
                        <a className='editDeletelink' onClick={this.popModal}>delete</a>
                    </div>
                    <div>
                        <h3 className='headings mainAreaHeading'>{this.props.note.title}</h3>
                        <div className='textBody'>
                            <p> {this.props.note.textBody}</p>
                        </div>
                    </div>

                <ModalComponent 
                    toggleDisplay={this.state.modalForm}
                    popModal={this.popModal}
                    handleNo={this.handleNo}
                    deleteNote={() => this.handleDelete()} />
            </div>
         );
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log( 'state in single note view: ', state);
    const id = ownProps.match.params.id
    console.log('note in single: ', state.notes)
    return {
        
        note: state.notes.find(note=>{
            return note._id === id
        })
    }
}
 
export default connect(mapStateToProps, {displayingNote, deletingNote}) (SingleNoteView);