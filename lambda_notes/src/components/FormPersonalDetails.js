import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import styled from 'styled-components';

const FormWrapper = styled.div`
padding: 1px;
margin: 7px;
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


export class FormPersonalDetails extends Component {

    continue = e => {
        // e.preventdefault();
        this.props.nextStep();
    }

    back = e => {
        // e.preventdefault();
        this.props.prevStep();
    }

  render() {
      //destructuring
      const {values} = this.props;
    return (
        <FormWrapper>
        <MuiThemeProvider>
        <>
        <h1 title="Enter Personal Details">Enter Personal Details</h1>
        
        <TextField
        hintText="Enter Your Occupation"
        floatingLabelText= "Occupation"
        onChange={this.props.handleChange('occupation')}
        defaultValue= {values.occupation} />
        <br />
        
        <TextField
        hintText="Enter Your City"
        floatingLabelText= "City"
        onChange={this.props.handleChange('city')}
        defaultValue= {values.city} />
        <br />
        
        
        <TextField
        hintText="Enter Your Bio"
        floatingLabelText= "Bio"
        onChange={this.props.handleChange('bio')}
        defaultValue= {values.bio} />
        
        <br />
        
        <RaisedButton 
        label="Continue"
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

export default FormPersonalDetails;
