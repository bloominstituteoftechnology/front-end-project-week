import React, { Component } from 'react';
import SideBar from "../SideBar/SideBar"
import {Route} from 'react-router-dom'
import "./NoteView.css"
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';


class NoteView extends Component {
    constructor() {
        super();
        this.state = {
            index: 0,
            mounted: false
        }
    }
    componentDidMount() {
        this.setState({
            index: this.props.location.state.index,
            mounted: true

        })
    }

    render() {
        return(
            <div>
                <div className="bodyModal">
                    <div className="modal">
                        <div className="modalQuestion">Are you sure you want to delete this?</div>
                        <div>
                            <button>Delete</button>
                            <button>No</button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log('NoteView', state)
    return {
        notes: state
    }
  }

export default connect(mapStateToProps)(NoteView);