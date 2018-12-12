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
})

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showPassword: false,
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
      },
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
  }

  handleChange = prop => event => {
    this.setState({ [prop]: { value: event.target.value, error: false, helpText: '', }});
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  handleSubmit(e) {
    e.preventDefault();

    // console.log(this.state.userName.value);


    if (this.state.userName.value !== this.props.userName) {
      this.setState({
        userName: {
          match: false,
          value: '',
          helpText: 'Username does not exist',
          error: true,
        }
      });
    } else {
      this.setState({
        userName: {
          match: true,
          value: '',
          helpText: '',
          error: false,
        }
      });
    }
    if (this.state.password.value !== this.props.password) {
      this.setState({
        password: {
          match: false,
          value: '',
          helpText: 'Password is incorrect',
          error: true,
        }
      });
    } else {
      this.setState({
        password: {
          match: true,
          value: '',
          helpText: '',
          error: false,
        }
      });
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
          Log in
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
              type={this.state.showPassword ? 'text' : 'password'} label="Password" value={this.state.password.value}
              onChange={this.handleChange('password')} helperText={ this.state.password.helpText }
              InputProps={{
               endAdornment: (
                 <InputAdornment position="end">
                   <IconButton
                     aria-label="Toggle password visibility"
                     onClick={this.handleClickShowPassword}
                   >
                     {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
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


           <Typography>
              OR
           </Typography>

            <span className={ classes.createLink }>
              Click <a href='' onClick={this.handleCreate}>HERE</a> to create an account
            </span>
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

export default connect(mapStateToProps, null)(withStyles(styles)(Login));
