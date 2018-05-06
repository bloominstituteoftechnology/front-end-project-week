import React, { Component } from 'react'

import Create from './Create'
import Delete from './Delete'
import Edit from './Edit'
import List from './List'
import Note from './Note'

import { Button } from 'reactstrap'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'
import './App.css'

const routes = [
  {
    path: '/',
    exact: true,
    sidebar: () => <div></div>,
    main: () => <h2 style={{
      paddingTop:'50px',
    }}>Your Notes:</h2>,
  },
  {
    path: '/create',
    sidebar: () => <div></div>,
    main: () => <h2 style={{
      paddingTop:'50px',
    }}>Create New Note:</h2>,
  },
  {
    path: '/note',
    sidebar: () => <div></div>,
    main: () => <h2>Note Name:</h2>,
  },
  {
    path: '/edit',
    sidebar: () => <div></div>,
    main: () => <h2>Edit Note:</h2>,
  },
  {
    path: '/delete',
    sidebar: () => <div></div>,
    main: () => <h2>Delete Note:</h2>,
  }
]

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      list: [],
      create: [
        {
          title: '',
          note: '',
        }
      ],
      edit: [
        {
          title: '',
          note: '',
        }
      ],

    }
  }
  render() {
    return (
      <Router>
        <div style ={{display: 'flex'}}>
          
          <div style={{
            paddingLeft:'10px',
            paddingRight:'10px',
            paddingBottom:'100%',
            width:'25%',
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
                <Button color='info' size='lg' block><Link to='/'>List</Link></Button>
              </div>
              <br/>
              <div>
                <Button color='info' size='lg' block><Link to='/create'>Create</Link></Button>
              </div>
            </div>

            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.sidebar}
              />
            ))}
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
      </Router>
    )
  }
}

export default App
