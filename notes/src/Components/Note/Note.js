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
    let modalMain={
      border:'none',
      textAlign:'center'
    }
    let modalHeader ={
      border:'none',
    }
    let modalFooter ={
      border:'none',
    }
    let deleteButton ={
      marginRight:'10%',
      backgroundColor:'red',
      borderRadius:'0',
      width:'20%',
    }
    let noButton={
      borderRadius:'0',
      marginRight:'25%',
      width:'20%',
    }
    let text = this.state.text;
    let styleTitle={
      color:'black',
      fontFamily:'Raleway',
      fontWeight:'bold',
      marginLeft:'5%',
      fontSize:'2em'
    }
    let styleTitleThumb={
      color:'black',
      fontFamily:'Raleway',
      fontWeight:'bold',
      borderBottom:'1px solid black',
      marginLeft:'10%',
      marginRight:'10%',
      backgroundColor:'white'
    }
    let panelThumb={
      paddingBottom:'60px',
    }
    let divThumb={
      margin:'40px',
      backgroundColor:'white',
      height:'200px',
      width:'80%',
    }
    let styleBodyThumb ={
      color:'black',
      fontFamily:'Raleway',
      backgroundColor:'white',
      border:'none'
    }
    let style={

      color:'black',
      fontFamily:'Raleway',
    }
    let options={
      backgroundColor:'#F3F3F3',
      color:'black',
      border:'none',
      textDecoration:'none',
      marginLeft:'80%'
    }
    let anchor ={
      color:'black',
      marginRight:'5%'
    }
    if(this.state.thumbNail){
      if(this.props.info.notes[this.state.id] && text){
        if(this.state.text.length > 104){
          text = this.state.text.slice(0,100) + "..."
        }
        else{
          text = this.state.text + "...";
        }
      return(
      <div style={divThumb}>
        <Panel style={panelThumb}>
          <Panel.Title style={styleTitleThumb} className="title">{
            this.props.info.notes[this.state.id].title
          }</Panel.Title>
          <Panel.Body style={styleBodyThumb} className="content">
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
                <div className="side">
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
              <div style={options}>
                 <Link to={'/edit/' + this.state.id}><a style={anchor}>edit</a></Link>
                 <a style={anchor} onClick={this.handleChange}>delete</a>
                 </div>
                <Panel className="notePanel">
                  <Panel.Title style={styleTitle} className="title">{
                    this.props.info.notes[this.state.id].title
                  }</Panel.Title>
                  <div className="static-modal">
                    <Modal.Dialog style={modalMain}>
                      <Modal.Header style={modalHeader}>
                      </Modal.Header>
                      <Modal.Body>Are you sure you want to delete this?</Modal.Body>
                      <Modal.Footer style={modalFooter}>
                      <Link to={'/'}>
                        <Button style={deleteButton} onClick={this.handleDelete}>Delete</Button>
                      </Link>
                        <Button style={noButton} onClick={this.reset}>No</Button>
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
                <div className="side">
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
              <div style={options}>
                 <Link to={'/edit/' + this.state.id}><a style={anchor}>edit</a></Link>
                 <a style={anchor} onClick={this.handleChange}>delete</a>
               </div>
                <Panel className="notePanel">
                  <Panel.Title style={styleTitle} className="title">{
                    this.props.info.notes[this.state.id].title
                  }</Panel.Title>
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
      }
      else{
        return(
        <div>
        <Grid className="grid">
          <Row className="show-grid">
            <Col xs={3} md={3} lg={3} className="col">
              <div className="side">
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
