import React, {Component} from 'react';
import {Panel} from 'react-bootstrap';
import {connect} from 'react-redux';
import {add} from '../../actions';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';

class Note extends Component{
  constructor(props){
    super(props);
    if(props.id || props.id >= 0){
      this.state = {
        id: props.id ,
        thumbNail:true
      }
    }
    else{
      this.state ={
        id: props.location.pathname.slice(7),
        thumbNail:false
      }
    }
  }
  render(){
    let style={
      color:'black',
      fontFamily:'Raleway',
    }
    if(this.state.thumbNail){
      if(this.props.info.notes[this.state.id]){
        let text = this.props.info.notes[this.state.id].text;
        if(text.length > 54){
          text = text.slice(0,50) + '...';
        }
        else{
          text = text + '...';
        }
      return(
      <div>
        <Panel className="notePanel">
          <Panel.Title style={style} className="title">{
            this.props.info.notes[this.state.id].title
          }</Panel.Title>
          <Panel.Body style={style} className="content">
           { 
             text
               }
               <br/>
              </Panel.Body>
            </Panel>
       </div>
      );
      }
      else{
        return(
        <div>
          <h1>There is no note here</h1>
          <Link to={'/'}><Button>index</Button></Link>

        </div>
        );
      }
    }
    else{
      if(this.props.info.notes[this.state.id]){
        return(
        <div>
              <Panel className="notePanel">
                <Panel.Title style={style} className="title">{
                  this.props.info.notes[this.state.id].title
                }</Panel.Title>
                <Panel.Body style={style} className="content">
               { 
                 this.props.info.notes[this.state.id].text
               }
               <br/>
                   <Link to={'/'}>
                     <Button>index</Button>
                   </Link>
                   <Link to={'/edit/' + this.state.id}><Button>edit</Button></Link>

                </Panel.Body>
              </Panel>

         </div>
        );
      }
      else{
        return(
        <div>
          <h1>There is no note here</h1>
          <Link to={'/'}><Button>index</Button></Link>

        </div>
        );
      }
    }
  }
}
const mapStateToProps = (state) =>{
  return{
    info:state
  }
}

export default connect(mapStateToProps, {add})(Note);
