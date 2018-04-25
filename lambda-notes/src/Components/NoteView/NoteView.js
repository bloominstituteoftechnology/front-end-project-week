import React, { Component } from 'react';
import SideBar from "../SideBar/SideBar"
import {Route} from 'react-router-dom'
import "./NoteView.css"
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';


class NoteView extends Component {
    constructor() {
        super()
    }

    render() {
        console.log(this.props.location.state.index)
        return(
            <div className="noteView">
                <SideBar/>
                <div className="noteCard">
                    <div className = "links">
                        <Link to="#">edit</Link>
                        <Link to="#">delete</Link>
                    </div>
                    <h1 className="title">Note Name</h1>
                    <p className="note">
                    Lorem ipsum dolor sit amet, legimus similique adolescens per an, feugiat eruditi et cum, eos an diam corpora. Vel tritani probatus ei, ei laudem tempor detracto pri. Vix lorem legere deserunt in, sed luptatum gubergren adversarium no. Sit et nihil tacimates, indoctum neglegentur eum cu.

Liber mollis vocibus nam eu, ea prima idque est, ius et quidam dicunt constituam. Ius amet wisi feugiat ei. Ut fabellas scribentur duo. Agam scripta pri cu, usu appareat expetendis vituperatoribus te.
                    </p>
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