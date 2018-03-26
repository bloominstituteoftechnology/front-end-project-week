import React, {Component} from 'react';
import {Grid,Row,Col,Button} from 'react-bootstrap';
import "./Create.css";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Create extends Component{
  constructor(props){
    super(props);
    this.state = {
      test:true,
      title:'',
      content:''
    }
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleContentChange= this.handleContentChange.bind(this);
  }

  handleTitleChange(event){
    this.setState({title:event.target.value});
  }
  handleContentChange(event){
    this.setState({content:event.target.value});
  }
  render(){
    console.log(this.props);
    return(
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
              <Button className="btn">+ Create New Note</Button>
            </div>
          </Col>
          <Col xs={9} md={9} lg={9} className="col">
            <div className="main">
              <Grid className="grid">
                <Row className="show-grid">
                  <h3 id="mainHeader">Your Notes:</h3>
                </Row>
                <form>
                <Row className="show-grid">
                  <input type="text" onChange={this.handleTitleChange} value={this.state.title} placeholder="Note Title"/>
                </Row>
                <Row className="show-grid">
                  <textarea onChange={this.handleContentChange} value={this.state.content} placeholder="Note Content" cols="70" rows="20"/>
                </Row>
                </form>
                <Row className="show-grid">
                  <Link to={`/`}>
                    <Button id="save">Save</Button>
                  </Link>
                </Row>
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

export default connect(mapStateToProps)(Create);
