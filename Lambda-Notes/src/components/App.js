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
      paddingTop:'55px',
    }}>Your Notes:</h2>,
  },
  {
    path: '/create',
    sidebar: () => <div></div>,
    main: () => 
    <div>
      <h2 style={{
        paddingTop:'55px',
        }}>Create New Note:
      </h2>,
      <Create />
    </div>
  },
  {
    path: '/note',
    sidebar: () => <div></div>,
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
  /* {
    path: '/edit',
    sidebar: () => <div></div>,
  },
  {
    main: () => <h5> style={{
    paddingLeft: '95%',
    }}delete</h5>,
    path: '/delete',
    sidebar: () => <div></div>,
  } */
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
          id: '',
        }
      ],
      edit: [
        {
          title: '',
          note: '',
          id: '',
        }
      ],

    }
  }
  render() {
    return (
      <Router>
        <div style={{display: 'flex'}}>
          
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
