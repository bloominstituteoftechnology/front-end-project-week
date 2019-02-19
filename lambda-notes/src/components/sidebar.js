import React from 'react'; 
import '../components/sidebar.css'
import {Link} from "react-router-dom";

export default class Sidebar extends React.Component {
  constructor(props){
    super(props); 
  }
    render(){
      return(
          <div>
            <h1>Lambda Notes</h1>
              <p className="button"> 
                <Link style={{textDecoration: 'none', color: 'white'}} to="/"> View Your Notes </Link>
              </p>
              <p className="button"> 
               <Link style={{textDecoration: 'none', color: 'white'}} to='/CreateNew'> + Create A New Note </Link>
              </p> 
              <p className='button'>  
               <Link style={{textDecoration: 'none', color: 'white'}} to='Register'>Create Account</Link> 
              </p>
              <p className='button'>  
               <Link style={{textDecoration: 'none', color: 'white'}} to='login'>Login</Link> 
              </p>
              <div className='button'>
                <button onClick={this.props.signOut}>Sign Out</button>
              </div> 
          </div> 
        )
    }
}