import React,{ Component } from 'react';
import './Login.css';

class Login extends Component {
constructor(props){
super(props);
this.state={
userName:''
}
}

changeHandler = (e) => {
this.setState({[e.target.name]:e.target.value});
}

submitQuerry = (e) => {
e.preventDefault();
if(this.props.users.includes(this.state.userName.toLowerCase())){this.props.login(this.state.userName.toLowerCase());}
else{alert('No such user exists!')}
}

render(){
	console.log();
return(
<div className="loginScreen">
<div>
<form onSubmit={(e)=>this.submitQuerry(e)} className="flex_row">
<input name="userName" value={this.state.userName} onChange={(e)=>this.changeHandler(e)} placeholder="username" />
<input className="login_button" type="submit" value="login" />
</form>
</div>
<div className="cooking" onClick={()=>this.props.login('guest')}>continue as guest</div>
</div>
)
}
}

export default Login