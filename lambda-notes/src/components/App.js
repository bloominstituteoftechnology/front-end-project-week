import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { getNotes } from '../actions/index'
import { addNote } from '../actions/index'
import { deleteNote } from '../actions/index'
import { updateNote } from '../actions/index'

 
import Header from './Header'
import Footer from './Footer'

import List from './notes/List'
import New from './notes/New'
import Detail from './notes/Detail'

class App extends Component {
    componentDidMount() {
        this.props.getNotes()
    }

    render() {
        return (
            <div id='app' className='container'>
                <Router>
                    <div>
                        <Header />

                        <div className='main'>
                            <Switch>
                                <Route exact path='/' render={props => (<List {...props} notes={this.props.notes}/>)}/>
                                <Route exact path='/notes/new' render={props => (<New {...props} addNote={this.props.addNote} notes={this.props.notes} /> )} />
                                <Route path='/:id' render={props => (<Detail {...props} deleteNote={this.props.deleteNote}/>)}/>

                            </Switch>
                        </div>

                        <Footer />
                    </div>
                </Router>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    notes: state.notes,
    note: state.note,
    gettingNotes: state.gettingNotes,
    updatingNote: state.updatingNote,
    noteDeleted: state.noteDeleted,
    noteAdded: state.noteAdded,
})

export default connect(mapStateToProps, { getNotes, addNote, deleteNote, updateNote })(App)
