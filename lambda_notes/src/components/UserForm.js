import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';
import App from '../App';


export class UserForm extends Component {
    state = {
        step: 1,
        firstName:'',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio:''

    };

    // proceed to the next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({ step:step + 1 });
    };

    // back one step
    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step -1 });
    };

    //handle field change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    };


  render() {
      const { step } = this.state;
      const { firstName, lastName, email, occupation, city, bio } = this.state;
      const values = { firstName, lastName, email, occupation, city, bio }

      switch(step) {
          case 1:
            return (
                <FormUserDetails 
                nextStep={this.nextStep}
                handleChange={this.handleChange}
                values={values}
                />
            );
            case 2:
            return (
                <FormPersonalDetails 
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
                />
            );
            case 3:
            return (
                <Confirm 
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values}
                />
            );
            case 4:
                return(<Success
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}                    
                    />);
            case 5:
                return(<App 
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
                    />);
            default:
                return <h1>Loading</h1>
      }
  }
}

export default UserForm;
