import React from 'react'
import Modal from '../styles/Modal';
import Login from '../Auth/Login';
import {Link,Route} from 'react-router-dom';

const Logout = () => {
    return(
      <Modal>
      <h1>You have signed-out successfully</h1>
      <p>Sign-in again?</p>
      <nav>
         <Link className='reg login' to='/Login'>Log in</Link>
      </nav>
      <main>
         <Route path='/Login' component={Login} exact></Route>
      </main>
       
      </Modal>

    );
}

export default Logout;
