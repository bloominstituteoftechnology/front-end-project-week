import React, {Component} from 'react';
import {Grid,Row,Col,Button} from 'react-bootstrap';
import "./View.css";
import {add} from '../../actions';
import {Link} from 'react-router-dom';
import Note from "../Note/Note.js";
import {connect} from 'react-redux';

class View extends Component{
  componentDidMount(){
    if(this.props.info.notes.length === 0){
      for(let i=0;i<9;i++){
        this.props.add('title','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a enim eu arcu mattis suscipit. Aenean finibus et odio in cursus. Suspendisse nec purus orci. Nam gravida, erat in dignissim laoreet, massa dolor finibus urna, in gravida ex metus et mi. Fusce eget arcu nisl. Morbi urna arcu, ullamcorper et enim quis, sollicitudin ullamcorper tortor. Vivamus sed pulvinar nulla. Curabitur eget posuere massa, at laoreet magna. Donec lectus felis, ultricies id tempor at, bibendum ac risus. Curabitur sollicitudin iaculis felis eget blandit. ',i);
      }
    }
  }
  render(){
    console.log(this.props.info.notes);
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
                          <Link to={'/notes/' + i}>
                            <Note id={i}/>
                          </Link>
                        </Col>
                      </div>
                    )}
                    else{
                      return(
                      <Col key={i} xs={3} md={3} lg={3} className="col">
                          <Link to={'/notes/' + i}>
                            <Note id={i}/>
                          </Link>
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
