import React, { Component } from 'react'
import CreateNewNote from './CreateNewNote'
import NotesList from './NotesList'
import { Button } from 'reactstrap'

import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom'

class SideBar extends Component {
    constructor(props) {
        super(props)
    }

    const routes = [
        {
            path: '/noteslist',
            exact: true,
            main: () => 
            <div>
                <h2 style={{
                    paddingTop:'55px',
                    }}>Your Notes:
                </h2>,
                <NotesList data={this.state}/>
            </div>
        },
        {
            path: '/createnewnote',
            main: () => 
            <div>
                <h2 style={{
                    paddingTop:'55px',
                    }}>Create New Note:
                </h2>,
                <CreateNewNote/>
            </div>
        },
        {
            path: '/viewnote',
            main: () => 
            <div>
                <div style={{display: 'flex'}}>
                    <h5 style={{
                        paddingLeft: '85%',
                        paddingTop: 0,
                        }}>edit
                    </h5>

                    <h5 style={{
                        paddingLeft: '87%',
                        paddingTop: 0,
                        }}>delete
                    </h5>
                </div>
                <h2 style={{
                    paddingTop:'25px',
                    }}>Note Name //placeholder
                </h2> 
            </div>, 
        },
    ]

    render() {
        return (
            <Router>
                <div style={{
                    display: 'flex',
                    }}>  

                    <div style={{ 
                        paddingLeft:'10px', 
                        paddingRight:'10px', 
                        paddingBottom:'100%', 
                        width:'19%', 
                        background:'#d3d2d3',
                        }}>

                        <div style={{
                            paddingBottom: '20px',
                            paddingTop: '20px',
                            }}>
                            <h1>Lambda Notes</h1>
                        </div>

                        <div style={{
                            listStyleType:'none', 
                            padding: '0',
                            }}>
                            <div>
                            <Button color='info' size='lg' block><Link to='/'>View Your Notes</Link></Button>
                            </div>
                            <br/>
                            <div>
                            <Button color='info' size='lg' block><Link to='/createnewnote'>+Create New Note</Link></Button>
                            </div>
                        </div>             

                        <div style={{flex: 1, padding: '10px'}}>
                            {routes.map((route) => (
                                <Route
                                    key={route.path}
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.main}
                                />
                            ))}
                        </div>

                    </div>
                </div>
            </Router>
        )
    }
}
export default SideBar
