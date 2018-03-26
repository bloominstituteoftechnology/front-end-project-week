import React, {Component} from 'react';
import {Grid,Row,Col,Button} from 'react-bootstrap';
import "./View.css";
import {add} from '../../actions';
import {Link} from 'react-router-dom';
import Note from "../Note/Note.js";
import {connect} from 'react-redux';

class View extends Component{
  componentDidMount(){
    this.props.add('blahlbah',0);
    this.props.add('blahlbah',1);
    this.props.add('blahlbah',2);
    this.props.add('blahlbah',3);
    this.props.add('blahlbah',4);
    this.props.add('blahlbah',5);
    this.props.add('blahlbah',6);
    this.props.add('blahlbah',7);
    this.props.add('blahlbah',8);
  }
  render(){
      return(
        <Grid className="grid">
          <Row className="show-grid">
            <Col xs={3} md={3} lg={3} className="col">
              <div className="side-bar">
                <h1>Lambda</h1>
                <h1 id="note">Note</h1>
                <Button className="btn">View Your Notes</Button>
                <br/>
                <Link to={`/create/`}>
                  <Button className="btn">+ Create New Note</Button>
                </Link>
              </div>
            </Col>
            <Col xs={9} md={9} lg={9} className="col">
              <div className="main">
                <Grid className="grid">
                  {this.props.info.notes.map( (e,i)=>{
                    if(i%3 === 0 && i !== 0){
                      return(
                      <div key={i}>
                        <Row className="show-grid"></Row>
                        <Col key={i} xs={3} md={3} lg={3} className="col">
                          <Note text = {e.text}/>
                        </Col>
                      </div>
                    )}
                    else{
                      return(
                      <Col key={i} xs={3} md={3} lg={3} className="col">
                        <Note text = {e.text}/>
                      </Col>
                    )}
                  })
                }
                </Grid>
              </div>
            </Col>
          </Row>
        </Grid>
      );
  }
}

const mapStateToProps = (state) =>{
  return {
    info:state
  }
}

export default connect(mapStateToProps,{add})(View);
