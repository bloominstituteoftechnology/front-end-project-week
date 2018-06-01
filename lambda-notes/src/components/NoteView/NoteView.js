import React, { Component } from 'react';
import DeleteNote from '../DeleteNote/DeleteNote';
import './index.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';



const mapStateToProps = (state) => {
    return {
        notesArray: state
    }
}


class NoteView extends Component {
    constructor() {
        super()
        this.state = {
            displayDelete: false,
            match:[],

            
        }
    }
    componentWillMount() {//fires before render()
        let routeId = this.props.match.params.id;
        let matched = this.props.notesArray.filter((item) => item._id === routeId);
        this.setState({matched})
     }
    // toggle logic if  state happen to be true it will be flipped false and verse a verse
    showModal = () => {
        this.setState({displayDelete: !this.state.displayDelete})
     
 }

    render() {
        return (
            <div className='noteView_container'>
                <div className='noteView_topContent'>
                    <h3 className='content_header'>
                        {this.state.matched[0].title}
                     </h3>
                    <div>
                        <Link to={`/edit/${this.props.match.params.id}`} className='edit_delete'>edit</Link>
                        <a href='#'
                            className='edit_delete'
                            onClick={this.showModal}
                        >
                            delete
                            </a> 
                    </div> 
                </div>
                
                <div className='noteList'>
                    <p className=''>
                        {this.state.matched[0].body}
                    </p>
                </div>
                <DeleteNote
                    toggle={this.state.displayDelete}
                    showModal={this.showModal}
                    toDelete={this.state.matched[0]._id}
                    history={this.props.history}

                />
            </div>
          );
    }
}
   

export default connect(mapStateToProps, {/*Actions here*/ }) ( NoteView );
