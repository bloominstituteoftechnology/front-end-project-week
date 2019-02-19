import React, { Component } from 'react';
import SideNotes from './styles/SideNotes';
import Button from './styles/Button';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Logout from './Auth/Logout';
import {Link, Route} from 'react-router-dom';

class LambdaNotes extends Component {
    logout = (event) => {
      event.preventDefault();
      console.log(`local storage removed`);
      localStorage.removeItem('jwt');
    }
    render() {
        return (
            <>
            <SideNotes>
            <h1>Lambda Notes</h1>
            <Link to='/'>
               <Button>View Your Notes</Button>
            </Link>
            <Link to='/notes'>
              <Button>Create New Notes</Button>
            </Link>
            <div>
             <nav>
                <Link className='reg' to='/Login'>Log in</Link>
                <Link className='reg' to='/Register'>Register</Link>
                <a  onClick={this.logout}>
                  <Link className='reg' to='/Logout'>Sign out</Link>
                </a>
              </nav> 
             
            </div>
            </SideNotes>
           
            <main>
                <Route path='/Login' component={Login} exact></Route>
                <Route path='/Register' component={Register}></Route>
                <Route path='/Logout' component={Logout}></Route>
            </main>
            </>
        );
    }
}

export default LambdaNotes;
