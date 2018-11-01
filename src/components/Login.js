import React, {Component} from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    changeHandler = event => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    render() {
        return (
            <div className='login'>
            <form className='login-form' autoComplete='off' onSubmit={() => this.props.submitHandler(this.state.username)}>
                
                <h1 className='logo' style={{color: '#0d1c49'}}>Vellum</h1>
                <p>A modern note-taking experience.</p>
                
                <input type='text' name='username' value={this.props.value} placeholder='Username' onChange={this.changeHandler}/>
                <input type='password' name='password' value={this.props.value} placeholder='Password' onChange={this.changeHandler}/>
                <input type='submit' className='cancel' value='Log In'/>

            </form>
            </div>
        )
    }
}

export default Login;