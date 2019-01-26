import React from 'react';
import DeleteModal from './deleteModal.js';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSingleNote } from '../../actions';
import {
  Container,
  Button,
  Card,
  CardText,
  CardBody,
  CardTitle,
} from 'reactstrap';
import ReactMarkdown from 'react-markdown';

class SingleNotePage extends React.Component {
  componentDidMount() {
    localStorage.setItem('location', this.props.location.pathname);
    this.props.getSingleNote(this.props.match.params.noteId);
  }
  render() {
    if (!this.props.fetchingNote) {
      return (
        <Container className="mt-5 singleNotePage">
          <div className="content">
            <Card>
              <CardBody>
                <CardTitle>{this.props.note.title}</CardTitle>
                <ReactMarkdown source={this.props.note.textBody} />
                {this.props.note.tags ? (
                  <CardText>
                    {'tags: '}
                    {this.props.note.tags}
                  </CardText>
                ) : null}
              </CardBody>
            </Card>
            <div className="btn-container mb-5">
              <Button
                color="primary"
                onClick={() =>
                  this.props.history.push(
                    `${this.props.match.params.noteId}/edit`
                  )}
              >
                Update
              </Button>
              <DeleteModal />
            </div>
          </div>
        </Container>
      );
    } else {
      return <div />;
    }
  }
}
const mapStateToProps = (state) => {
  return {
    note: state.note,
    fetchingNote: state.fetchingNote,
  };
};
export default connect(mapStateToProps, { getSingleNote })(
  withRouter(SingleNotePage)
);
