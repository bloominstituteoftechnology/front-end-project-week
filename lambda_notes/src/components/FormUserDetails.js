import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {

    continue = e => {
        // e.preventdefault();
        this.props.nextStep();
    }

  render() {
      //destructuring
      const { values } = this.props;
    return (
      <MuiThemeProvider>
          <>
           <h1 title="Enter User Details">Enter User Details</h1>
           <h4>Hello! We Need Your User Details</h4>

            <TextField
                hintText="Enter Your First Name"
                floatingLabelText= "First Name"
                onChange={this.props.handleChange('firstName')}
                defaultValue= {values.firstName} />
                <br/>

                <TextField
                hintText="Enter Your Last Name"
                floatingLabelText= "Last Name"
                onChange={this.props.handleChange('lastName')}
                defaultValue= {values.lastName} />
                <br/>


                <TextField
                hintText="Enter Your Email"
                floatingLabelText= "Email"
                type="text"
                onChange={this.props.handleChange('email')}
                defaultValue= {values.email} />

                <br/>

                <RaisedButton 
                label="Continue"
                primary={true}
                style={styles.button}
                onClick={this.continue}/>
                <br/>
          </>
        <h1>Lambda Notes</h1>
      </MuiThemeProvider>
    )
  }
}

const styles = {
    button: { 
        margin:15
    }
}

export default FormUserDetails;
