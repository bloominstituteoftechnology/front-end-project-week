import React,{ Component } from 'react';
import posed, { PoseGroup } from 'react-pose';

const Shade = posed.div({
enter:{opacity:0.5},
exit:{opacity:0}
});

const Box = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    delay: 200
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: { duration: 200 }
  }
});

class SecondModal extends Component {
constructor(props){
super(props);
this.state={
visible:false
}
}

componentDidMount(){
setTimeout(()=>{
	this.setState({visible:!this.state.visible});
},100);
}

unmountAndLogout(){
this.setState({visible:!this.state.visible});
setTimeout(()=>{
	this.props.logout();
},300);
}

unmountBack(){
this.setState({visible:!this.state.visible})
setTimeout(()=>{
this.props.toggleLogout();
},300);
}

render(){
return(
<PoseGroup>
{this.state.visible && [
<Shade className="shade" key="shade" />,
<Box className="popUp" key="box">
<div className="text">Are you sure you want to logout?</div>
<div className="options">
<div className="select red" onClick={()=>this.unmountAndLogout()}>Logout</div>
<div className="select" onClick={()=>this.unmountBack()}>No</div>
</div>
</Box>]}
</PoseGroup>

)}
}

export default SecondModal;