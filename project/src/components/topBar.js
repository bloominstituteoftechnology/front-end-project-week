import React,{ Component } from 'react';
import './topBar.css';
import SecondModal from './SecondModal';

class TopBar extends Component {
constructor(props){
super(props);
this.state={
confirmLogout:false,
}
}

toggleLogout = () => {
if(this.props.loggedIn==="guest"){
this.props.logout()
}
else{
this.setState({confirmLogout:!this.state.confirmLogout})
}
}

render(){
return(
<div className="topBar">
<div>Logged in as: {this.props.loggedIn}</div>
<div onClick={()=>this.toggleLogout()} className="option">Logout</div>
{this.state.confirmLogout? (
<SecondModal logout={this.props.logout} toggleLogout={this.toggleLogout}/>
):(
null	
)
}
</div>
)}
}

export default TopBar;