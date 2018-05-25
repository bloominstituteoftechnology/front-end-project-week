import React from 'react';
import { Button } from 'reactstrap';

const Login = (props) => {
  console.log(props)
  return (
    
    <div>
      {props.auth 
        ? 
          <Button className="side-button col-sm-6 col-md-4 float-right" onClick={props.logOut}>Sign-Out</Button> 
        :
          <Button className="side-button col-sm-6 col-md-4 float-right" onClick={props.fbAuth}>Sign-in With Facebook</Button>
      }
      
    </div>
  )
}
 
export default Login;