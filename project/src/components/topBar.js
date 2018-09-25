import React,{ Component } from 'react';
import './topBar.css';

class TopBar extends Component {
constructor(props){
super(props);
this.state={
confirmLogout:false
}
}	

toggleLogout = () => {
if(this.props.loggedIn==="guest"){
this.props.logout()
}
else{
let opposite = !this.state.confirmLogout
this.setState({confirmLogout:opposite});
}
}

render(){
return(
<div className="topBar">
<div>Logged in as: {this.props.loggedIn}</div>
<div onClick={()=>this.toggleLogout()} className="option">Logout</div>
{this.state.confirmLogout? (
<React.Fragment>
<div className="shade"></div>
<div className="popUp">
<div className="text">Are you sure you want to logout?</div>
<div className="options">
<div className="select red" onClick={()=>this.props.logout()}>Logout</div>
<div className="select" onClick={()=>this.toggleLogout()}>No</div>
</div>
</div>
</React.Fragment>
):(
null	
)
}
</div>
)}
}

export default TopBar;