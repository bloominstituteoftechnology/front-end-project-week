import React,{ Component } from 'react';
import './SideBar.css';
import posed from 'react-pose';

const Bar = posed.div({
enter:{x:0,delay:200,transition:{ duration:300 }},
exit:{x:-300,transition:{ duration:300 }}
});

class SideBar extends Component {
constructor(props){
super(props);
this.state={
visible:false
}
}
componentDidMount(){
setTimeout(()=>{
this.setState({visible:!this.state.visible});
}, 
100)	
}

render(){
return(
<Bar className="sideBar" pose={this.state.visible?'enter':'exit'}>
<div className="header">
<div>Lambda</div>
<div>Notes</div>
</div>
<div className="button" onClick={()=>this.props.viewall()}>view all notes</div>
<div className="button" onClick={()=>this.props.viewmy()}>view your notes</div>
<div className="button" onClick={()=>this.props.adding()}>+ add new note</div>
</Bar>
)}
}

export default SideBar