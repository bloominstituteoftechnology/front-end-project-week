import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';

const styles = theme => ({
  loginCtr: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '10px',
    flex: '1',
    justifyContent: 'space-between',
  },
  buttonText: {
    color: 'white',
  },
  submitBtn: {
    width: '90px',
  },
  textFieldCtr: {
    width: '100%',
    height: '78px',
  },
  textField: {
    width: '100%',
  },
  createLink: {
    fontFamily: theme.typography.fontFamily,
  }
});

class Create extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: {
        match: false,
        value: '',
        helpText: '',
        error: false,
      },
      password: {
        match: false,
        value: '',
        helpText: '',
        error: false,
        show: false,
      },
      passwordCheck: {
        value: '',
        helpText: '',
        error: false,
        show: false,
      }
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
  }

  handleChange = prop => event => {
    this.setState({
      [prop]: {
        value: event.target.value,
        helpText: '',
        error: false,
        show: this.state[prop].show,
      }
    });
  };

  handleClickShowPassword = prop => {

    this.setState((state) => ({
      [prop]: {
        value: state[prop].value,
        helpText: state[prop].helpText,
        error: state[prop].error,
        show: !state[prop].show,
      }
    }));
  };

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.userName.value.length < 6) {
      this.setState({
        userName: {
          value: '',
          helpText: 'Username must be at least 6 characters long!',
          error: true,
        }
      });
    } else if (this.state.password.value.length < 6) {
      this.setState({
        password: {
          value: '',
          helpText: 'Password must be at least 6 characters long!',
          error: true,
          show: this.state.password.show,
        }
      });
    } else if (this.state.password.value !== this.state.passwordCheck.value) {
      this.setState({
        password: {
          value: '',
          helpText: 'Passwords do not match',
          error: true,
          show: this.state.password.show,
        },
        passwordCheck: {
          value: '',
          helpText: 'Passwords do not match',
          error: true,
          show: this.state.password.show,
        }
      });
    } else {
      this.props.handleCreateAccount(this.state.userName.value, this.state.password.value);
      this.props.handleLogin();
    }

  }

  handleCreate(e) {
    e.preventDefault();
    this.props.handleCreate();
  }

  componentDidUpdate() {
    (this.state.password.match && this.state.userName.match) && this.props.handleLogin();
  }

  render() {

    const { classes } = this.props;

    return (
      <div className={ classes.loginCtr }>
        <Typography variant='h5'>
          Create an Account
        </Typography>
        <form className={ classes.form }>



          {/* USERNAME */}
          <div className={ classes.textFieldCtr }>
            <TextField error={this.state.userName.error} required id="outlined-adornment-username" variant="outlined" className={ classes.textField }
              type='text' label="username" value={this.state.userName.value}
              onChange={this.handleChange('userName')} helperText={ this.state.userName.helpText }/>
          </div>


          {/* PASSWORD */}
          <div className={ classes.textFieldCtr }>
            <TextField error={this.state.password.error} required id="outlined-adornment-password" variant="outlined" className={ classes.textField }
              type={this.state.password.show ? 'text' : 'password'} label="Password" value={this.state.password.value}
              onChange={this.handleChange('password')} helperText={ this.state.password.helpText }
              InputProps={{
               endAdornment: (
                 <InputAdornment position="end">
                   <IconButton
                     aria-label="Toggle password visibility"
                     onClick={() => this.handleClickShowPassword('password')}
                   >
                     {this.state.password.show ? <VisibilityOff /> : <Visibility />}
                   </IconButton>
                 </InputAdornment>
               ),
             }}/>
            </div>



            {/* RE ENTER PASSWORD */}
            <div className={ classes.textFieldCtr }>
              <TextField error={this.state.passwordCheck.error} required id="outlined-adornment-passwordCheck" variant="outlined" className={ classes.textField }
                type={this.state.passwordCheck.show ? 'text' : 'password'} label="Re-enter password" value={this.state.passwordCheck.value}
                onChange={this.handleChange('passwordCheck')} helperText={ this.state.passwordCheck.helpText }
                InputProps={{
                 endAdornment: (
                   <InputAdornment position="end">
                     <IconButton
                       aria-label="Toggle password visibility"
                       onClick={() => this.handleClickShowPassword('passwordCheck')}
                     >
                       {this.state.passwordCheck.show ? <VisibilityOff /> : <Visibility />}
                     </IconButton>
                   </InputAdornment>
                 ),
               }}/>
              </div>

           <Button size='small' color='primary' variant='contained' className={ classes.submitBtn } onClick={ this.handleSubmit }>
            <Typography variant='button' className={ classes.buttonText }>
              Submit
            </Typography>
           </Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userName: state.user.userName,
    password: state.user.password,
  }
}

export default connect(mapStateToProps, null)(withStyles(styles)(Create));
