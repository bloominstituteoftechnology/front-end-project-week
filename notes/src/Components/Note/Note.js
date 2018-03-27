import React, {Component} from 'react';
import {Panel} from 'react-bootstrap';
import {connect} from 'react-redux';
import {remove,add} from '../../actions';
import {Link} from 'react-router-dom';
import {Modal,Grid,Row,Col,Button} from 'react-bootstrap';
import './Note.css';

class Note extends Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.reset = this.reset.bind(this);

    if(props.id || props.id >= 0){
      this.state = {
        id: props.id ,
        thumbNail:true,
        text: props.info.notes[props.id].text
      }
    }
    else{
      this.state ={
        id: props.location.pathname.slice(7),
        thumbNail:false,
        show:false,
        text:''
      }
    }
  }
  reset(){
    this.setState({show:false});
  }

  handleChange(){
    this.setState({show:true});
  }

  handleDelete(){
    this.props.remove(this.state.id);
  }

  render(){
    let style={
      color:'black',
      fontFamily:'Raleway',
    }
    if(this.state.thumbNail){
      if(this.props.info.notes[this.state.id] && this.state.text){
        if(this.state.text.length > 54){
          this.state.text = this.state.text.slice(0,50) + '...';
        }
        else{
          this.state.text += '...';
        }
      return(
      <div>
        <Panel className="notePanel">
          <Panel.Title style={style} className="title">{
            this.props.info.notes[this.state.id].title
          }</Panel.Title>
          <Panel.Body style={style} className="content">
           { 
             this.state.text
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
        </div>
        );
      }
    }
    else{
      if(this.props.info.notes[this.state.id]){
        if(this.state.show){
          return(
          <div>
          <Grid className="grid">
            <Row className="show-grid">
              <Col xs={3} md={3} lg={3} className="col">
                <div className="side-bar">
                  <h1>Lambda</h1>
                  <h1 id="note">Note</h1>
                  <Link to={`/`}>
                    <Button className="btn">View Your Notes</Button>
                  </Link>
                  <br/>
                  <Link to={`/create/`}>
                    <Button className="btn">+ Create New Note</Button>
                  </Link>
                </div>
              </Col>
              <Col xs={9} md={9} lg={9} className="col">
                 <Link to={'/edit/' + this.state.id}><Button className="btn">edit</Button></Link>
                 <Button className="btn" onClick={this.handleChange}>delete</Button>
                <Panel className="notePanel">
                  <Panel.Title style={style} className="title">{
                    this.props.info.notes[this.state.id].title
                  }</Panel.Title>
                  <div className="static-modal">
                    <Modal.Dialog>
                      <Modal.Header>
                      </Modal.Header>
                      <Modal.Body>Are you sure you want to delete this?</Modal.Body>
                      <Modal.Footer>
                      <Link to={'/'}>
                        <Button className="btn" onClick={this.handleDelete}>Delete</Button>
                      </Link>
                        <Button className="btn" onClick={this.reset}>No</Button>
                      </Modal.Footer>
                    </Modal.Dialog>
                  </div>
              <Panel.Body style={style} className="content">
               { 
                   this.props.info.notes[this.state.id].text
                 }
                 <br/>
                  </Panel.Body>
                </Panel>
              </Col>
            </Row>
          </Grid>
           </div>
          );
        }
        else{
          return(
          <div>
          <Grid className="grid">
            <Row className="show-grid">
              <Col xs={3} md={3} lg={3} className="col">
                <div className="side-bar">
                  <h1>Lambda</h1>
                  <h1 id="note">Note</h1>
                  <Link to={`/`}>
                    <Button className="btn">View Your Notes</Button>
                  </Link>
                  <br/>
                  <Link to={`/create/`}>
                    <Button className="btn">+ Create New Note</Button>
                  </Link>
                </div>
              </Col>
              <Col xs={9} md={9} lg={9} className="col">
                 <Link to={'/edit/' + this.state.id}><Button className="btn">edit</Button></Link>
                 <Button className="btn" onClick={this.handleChange}>delete</Button>
                <Panel className="notePanel">
                  <Panel.Title style={style} className="title">{
                    this.props.info.notes[this.state.id].title
                  }</Panel.Title>
                  <Panel.Body style={style} className="content">
                 { 
                   this.state.text
                 }
                 <br/>
                  </Panel.Body>
                </Panel>
              </Col>
            </Row>
          </Grid>
           </div>
          );
        }
      }
      else{
        return(
        <div>
        <Grid className="grid">
          <Row className="show-grid">
            <Col xs={3} md={3} lg={3} className="col">
              <div className="side-bar">
                <h1>Lambda</h1>
                <h1 id="note">Note</h1>
                <Link to={`/`}>
                  <Button className="btn">View Your Notes</Button>
                </Link>

                <br/>
                <Link to={`/create/`}>
                  <Button className="btnMain">+ Create New Note</Button>
                </Link>
              </div>
            </Col>
            <Col xs={9} md={9} lg={9} className="col">
              <div></div>
            </Col>
          </Row>
        </Grid>
        </div>
        );
      }
    }
  }
}

const mapStateToProps = (state) =>{
  return {
    info:state
  }
}

export default connect(mapStateToProps,{remove,add})(Note);
