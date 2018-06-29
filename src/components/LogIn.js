import React from 'react';
import { Button } from 'reactstrap';
import { withRouter } from 'react-router-dom';


const Login = (props) => {
  // console.log(props)
  return (
    
    <div>
      {props.auth 
        ? 
          <Button className="side-button col-sm-6 col-md-4 float-right" onClick={props.logOut}>Sign-Out</Button> 
        :
          <div>
            <Button className="side-button col-sm-6 col-md-4 float-right" onClick={() => props.history.push('/login')}>Sign-in</Button>
            <Button className="side-button col-sm-6 col-md-4 float-right" onClick={() => props.history.push('/register')}>Register</Button>
          </div>
      }
      
    </div>
  )
}
 
export default withRouter(Login);