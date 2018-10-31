import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { getNotes } from '../actions/index'

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
                                <Route exact path='/' component={List} />
                                <Route exact path='/notes/new' component={New} />
                                <Route path='/notes/:id' component={Detail} />

                                <Route
                                    render={({ location }) => <strong> Nothing matched {location.pathname} :( </strong>}
                                />
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

export default connect(mapStateToProps, { getNotes })(App)
