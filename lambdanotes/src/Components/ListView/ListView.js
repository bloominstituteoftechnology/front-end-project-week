import React, { Component } from 'react';
import './ListView.css';
import SideBar from '../SideBar/SideBar.js';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { newNote } from '../../Actions/index';
import axios from 'axios';

class ListView extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            notes:[]
         }

    }





    render() { 
        return (  
            <div className = "body">
                <SideBar/>
                <div className = "sideBar_pop notes listview">
                    <div className = "list">
                        <h2>Your Notes:</h2>
                    </div>

                    <div>
                        
                            <h1>Make a note</h1>
                    
                            <div className = "row">
                                {this.props.notes.map(note => {
                                return (
                                    <div className="card">
                                        <Link to ={`/note/${note.id}`
                                        }>
                                            <h1 className="underline">{note.title}</h1>
                                            <p>{note.content}</p>
                                        </Link>
                                    </div>
                                    
                                )
                            })} 
                            </div>
                        
                    </div>
                </div>
            </div>
    )
}
}
 
// const mapStateToProps = state => {
//     console.log('list', state)
//     return {
//         notes: state
//     }
// }


export default ListView