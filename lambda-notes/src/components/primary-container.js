import React, { Component } from 'react';
import { Card, CardTitle, CardBody, CardText, Col, Button, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getNotes, saveNote, handleReverse, handleOrder, sortTitle } from '../REDUX/actions';
import { CardFactory } from './card-factory';
import { ShowAt, HideAt } from 'react-with-breakpoints';

class PrimaryContainer extends Component {
  constructor() {
    super();
    this.state = { 
      listView: false,
      listOptions: false,
      sortOptions: false,
      defaultSort: true,
      sortOldest: false,
      sortTitle: false
    }
  }

  componentDidMount() { this.props.getNotes() }

  cardFactory = note => {
    const contentLength = note.content.split(" ");
    return (
      <Col 
        md="12" 
        lg={this.props.listView ? "12" : "6"} 
        xl={this.props.listView ? "12" : "4"} 
        className="NoteCard" 
        key={note.id}
      >
        <Link to={{ pathname: `/viewnote/${note.id}`, state: { viewNote: {note} } }} className="CardLink">
          <Card className="Card">
            <CardBody className="CardContent">
              <CardTitle className="CardTitle">{note.title}</CardTitle>
              <CardText className="CardText">
                { contentLength.length >= 17 ? `${contentLength.slice(0, 17).join(" ")} ...` : note.content }
              </CardText>
            </CardBody>
          </Card>
        </Link>
      </Col>
    )
  }

  viewOrder = () => {
    return (
      <Dropdown group 
        isOpen={this.state.sortView} 
        size="sm" 
        className="mr-3"
        toggle={() => this.setState({ sortView: !this.state.sortView })}>
        <DropdownToggle caret className="Nav__ButtonsContainer--navButton">Sort by</DropdownToggle>
        <DropdownMenu>
          <DropdownItem
            onClick={() => {
              this.setState({ defaultSort: false, sortOldest: false, sortTitle: true })
              this.props.sortTitle();
            }}
            className={!this.state.defaultSort && !this.state.sortOldest ? "active" : ""}
          >Title A-Z</DropdownItem>
          <DropdownItem 
            onClick={() => {
              this.setState({ defaultSort: false, sortOldest: true, sortTitle: false });
              this.props.handleReverse();
            }}
            className={!this.state.defaultSort && !this.state.sortTitle ? "active" : ""}  
          >Oldest - Newest</DropdownItem>
          <DropdownItem 
            onClick={() => {
              this.setState({ defaultSort: true, sortOldest: false, sortTitle: false });
              this.props.handleOrder();
            }}
            className={!this.state.sortTitle && !this.state.sortOldest ? "active" : ""}
          >Newest - Oldest</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    )
  }

  render() {
    const list = this.props.notes.map((note) => {
      return {content: (<CardFactory note={note} />)};
    });
    return (
      <div className="PrimaryContainer">
        <div className="d-flex justify-content-between align-items-center w-100 sticks">
          <h1 className="PrimaryContainer__header--notecards sticky">
            {this.props.username !== "" ? `${this.props.username}'s Notes:` : "Your Notes:"}
          </h1>
          <div className="sticky">{ this.viewOrder() }</div>
        </div>
        {/* <div className="d-flex justify-content-between align-items-center w-100">
          <h1 className="PrimaryContainer__header--notecards">Your Notes:</h1>
          <div>{ this.viewOrder() }</div>
        </div> */}
        <div className="PrimaryContainer__cardContainer">
          {this.props.notes.map(note => this.cardFactory(note))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ 
  notes: state.notes, 
  night: state.night, 
  listView: state.listView,
  username: state.username
})

export default connect(mapStateToProps, { getNotes, saveNote, handleReverse, handleOrder, sortTitle })(PrimaryContainer);