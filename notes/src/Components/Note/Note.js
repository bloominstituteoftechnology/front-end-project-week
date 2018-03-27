import React, {Component} from 'react';
import {Panel} from 'react-bootstrap';
import {connect} from 'react-redux';
import {add} from '../../actions';
import {Link} from 'react-router-dom';

class Note extends Component{
  constructor(props){
    super(props);
    this.state = {
      id: -1
    }
  }
  componentDidMount(){
    if(this.props.id !== -1){
      this.setState({id:this.props.id});
    }
    else{
    }

  }
  render(){
    let style={
      color:'black',
      fontFamily:'Raleway',
    }
    if(this.props.info.notes[this.state.id]){
      return(
      <div>
        <Link to={'/'}>index</Link>
            <Panel className="notePanel">
              <Panel.Title style={style} className="title">{
                this.props.info.notes[this.state.id].title
              }</Panel.Title>
              <Panel.Body style={style} className="content">
             { 
               this.props.info.notes[this.state.id].title
             }
              </Panel.Body>
            </Panel>
       </div>
      );
    }
    else{
      return(
      <h1>test</h1>
      );
    }
  }
}
const mapStateToProps = (state) =>{
  return{
    info:state
  }
}

export default connect(mapStateToProps, {add})(Note);
