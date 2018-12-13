import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
// import { RaisedButton } from 'material-ui';
import styled from 'styled-components';

const FormWrapper = styled.div`
padding: 5px;
margin: 20px;
width: 75%
max-width: 600px;
background: #F2F1F2;
margin-top: 50px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 8px;
`;


export class Comfirm extends Component {

    continue = e => {
        // e.preventdefault();
        //process Form, send it to the api like axois, or any other api
        this.props.nextStep();
    }

    back = e => {
        // e.preventdefault();
        this.props.prevStep();
    }

  render() {
      //destructuring
      const { values: {firstName, lastName, email, occupation, city, bio} } = this.props;
    return (
        <FormWrapper>
        
      <MuiThemeProvider>
          <>
           <h1 title="Confirm User Data">Confirm User Data</h1>
           <List>
               <ListItem 
               primaryText="First Name"
               secondaryText={firstName}
               />
               <ListItem 
               primaryText="Last Name"
               secondaryText={lastName}
               />
               <ListItem 
               primaryText="Email"
               secondaryText={email}
               />
               <ListItem 
               primaryText="Occupation"
               secondaryText={occupation}
               />
               <ListItem 
               primaryText="City"
               secondaryText={city}
               />
               <ListItem 
               primaryText="Bio"
               secondaryText={bio}
               />
           </List>

                <br/>

                <RaisedButton 
                label="Conform & Continue"
                primary={true}
                style={styles.button}
                onClick={this.continue}/>
                
                <RaisedButton 
                label="Back"
                primary={false}
                style={styles.button}
                onClick={this.back}/>
                <br />
          </>
        <h1>Hello from User Details</h1>
      </MuiThemeProvider>

      </FormWrapper>
    )
  }
}

const styles = {
    button: { 
        margin:15
    }
}

export default Comfirm;
