import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom';
import App from '../App';
import AppBar from 'material-ui/AppBar';
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



class Success extends Component {

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
      
    return (
        <FormWrapper>
      <MuiThemeProvider>
          <>
            <h4>Success</h4>
            <h5>Thank You for your Submission</h5>
           
            <h3>Click Here To Enter Lambda Notes</h3>

                {/*<NavLink exact to="/App">*/}
                    <RaisedButton 
                        label="Lambda Notes"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                        />
                        <br/>
                {/*</NavLink> 
                <Route exact path="/App" component={App} />*/}
       
          </>
       
      </MuiThemeProvider>

      </FormWrapper >
        
    );
  }
}

const styles = {
    button: { 
        margin:15
    }
}

export default Success;



