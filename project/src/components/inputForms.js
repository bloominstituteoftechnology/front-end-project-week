import React, { Component } from 'react';
import Form from './text';

class input extends Component {
constructor(props){
super(props);
this.state={
input:''
}
}
handleChange(e){
this.setState({input:e.target.value});
}
render(){
return(
<React.Fragment>
<Form value={this.state.input} onChange={this.handleChange} />
</React.Fragment>
);}
}

export default input