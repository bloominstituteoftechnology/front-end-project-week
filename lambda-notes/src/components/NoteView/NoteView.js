import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { deletingItem } from '../../actions/index';
import Markdown from 'markdown-to-jsx';
import { Modal, ModalHeader, ModalFooter, Button } from 'reactstrap';

class NoteView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  delete = e => {
    const index = this.props.match.params.index;
    const note = this.props.notes[index];
    const id = note._id;
    console.log('DELETING', id);
    this.props.deletingItem(index, id);
    this.toggle();
    setTimeout(() => {
      alert(`${note.title} deleted`);
    }, 500);
  };

  render() {
    console.log('STATE', this.props.state);
    console.log('NOTES', this.props.notes);
    const index = this.props.match.params.index;
    const note = this.props.notes[index];
    const content = note.content;
    // const content = note.content
    //   .split("\n")
    //   .map((paragraph, index) => <Markdown key={index}>{paragraph}</Markdown>);
    console.log('note', note);
    console.log({ note_id: note._id });
    return (
      <React.Fragment>
        <div className="d-flex position-absolute edition">
          <div onClick={this.toggle}>delete</div>
          <Link to={`/edit/${index}`}>
            <div>edit</div>
          </Link>
        </div>
        <h5 className="text-capitalize">{note.title}</h5>
        {/* <div className="">{content}</div> */}
        <Markdown options={{ forceBlock: true }} className="">
          {content}
        </Markdown>

        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>
            Are you sure you want to delete this?
            <div className="d-fles">
              <Link to="/">
                <Button color="danger" onClick={this.delete}>
                  Delete
                </Button>
              </Link>{' '}
              <Button color="secondary" onClick={this.toggle}>
                No
              </Button>
            </div>
          </ModalHeader>
        </Modal>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state,
    notes: state.data,
  };
};

NoteView.proptypes = {
  state: PropTypes.object.isRequired,
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  index: PropTypes.number.isRequired,
  note: PropTypes.object.isRequired,
  content: PropTypes.string.isRequired,
  deletingItem: PropTypes.bool.isRequired,
};

// export default connect(mapStateToProps, { deletingItem })(NoteView)
export default withRouter(
  connect(
    mapStateToProps,
    { deletingItem }
  )(NoteView)
);
