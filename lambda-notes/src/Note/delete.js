import React,{Component} from 'react';
import axios from 'axios';
import{ Link } from 'react-router-dom'
import { Tooltip } from 'reactstrap';

class Delete extends Component {
constructor(props){
    super(props)
    this.toggle = this.toggle.bind(this);
    this.state={
        tooltipOpen:false
    }
}
toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }
delete =id =>{
    axios
    .delete(`http://localhost:5000/notes/${id}`)
    .then(response=>{
        window.location.reload()
    })
    .catch(err=>{
        console.log(err)
    })
}
    render(){
return(
<Link to="/"  onClick={()=>this.delete(this.props.id)}><i className="delete-styles" id="TooltipExample" class="fas fa-eraser"></i>
<Tooltip placement="top" isOpen={this.state.tooltipOpen} target="TooltipExample" toggle={this.toggle}>
          Delete
        </Tooltip>

</Link>
)
    }
}
export default Delete;
