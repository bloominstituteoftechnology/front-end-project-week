import React, { Component } from 'react';
import NoteList from "../notes/NoteList"

class Dashboard extends Component{
    render() {
        return(
<div className="dashboard-container">
<div>
<NoteList />
</div>
</div>

         ) }
}

export default Dashboard;