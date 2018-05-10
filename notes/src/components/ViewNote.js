import React, { Component } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'

class ViewNote extends Component {
  constructor(props) {
    super(props)
    this.state = {
      enabledEditDelete: false
    }
  }

  showEditDelete = e => {
    e.preventDefault()
    this.setState({ enabledEditDelete: true })
  }

  hideEditDelete = e => {
    e.preventDefault()
    this.setState({ enabledEditDelete: false })
  }

  render() {
    return (
      <div
        onMouseEnter={this.showEditDelete}
        onMouseLeave={this.hideEditDelete}
      >
        {this.state.enabledEditDelete && (
          <Row>
            <Col>
              <Link to={`/edit/${this.props.match.params.id}`}>
                <Button bsStyle="primary">Edit</Button>
              </Link>
              <Link to={`/delete/${this.props.match.params.id}`}>
                <Button bsStyle="danger">Delete</Button>
              </Link>
            </Col>
          </Row>
        )}
        <Row>
          <Col>
            <h3>{this.props.notes[this.props.match.params.id].title}</h3>
            {this.props.notes[this.props.match.params.id].content
              .replace(/\r?\n/g, '<br>')
              .replace(/<br>+/g, '<br>')
              .split('<br>')
              .map((para, index) => {
                return <p key={index}>{para}</p>
              })}
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = ({ notes }) => ({ notes })

export default withRouter(connect(mapStateToProps)(ViewNote))
