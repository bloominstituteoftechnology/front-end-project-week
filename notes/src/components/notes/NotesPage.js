import React from 'react';
import Note from './note.js';
import { connect } from 'react-redux';
import { getNotes } from '../../actions/index.js';
import { Container, Input } from 'reactstrap';

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredNotes: [],
      filterParam: '',
    };
  }
  componentDidMount() {
    localStorage.setItem('location', this.props.location.pathname);
    const token = localStorage.getItem('jwt');
    const id = localStorage.getItem('id');
    const reqOptions = {
      headers: {
        Authorization: token,
        id: id,
      },
    };
    this.props.getNotes(reqOptions);
  }
  onChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value }, () => {
      this.filterNotes();
    });
  };
  filterNotes = () => {
    let filteredNotes = this.props.notes.slice();
    const filterParam = this.state.filterParam.toLowerCase();
    filteredNotes = filteredNotes.filter(
      (e) =>
        e.textBody.toLowerCase().includes(filterParam) ||
        e.title.toLowerCase().includes(filterParam) ||
        (e.tags !== null && e.tags.toLowerCase().includes(filterParam))
    );
    return this.setState({ filteredNotes: filteredNotes });
  };
  render() {
    if (!this.props.fetchingNotes) {
      return (
        <Container className="notesPage">
          <div className="content">
            <Input
              type="text"
              name="filterParam"
              placeholder="Enter search term"
              value={this.state.filterParam}
              onChange={this.onChangeHandler}
              className="mb-5 mt-5"
            />
            {this.state.filterParam.length === 0 ? (
              this.props.notes.map((e, i) => <Note key={i} data={e} />)
            ) : (
              this.state.filteredNotes.map((e, i) => <Note key={i} data={e} />)
            )}
          </div>
        </Container>
      );
    } else {
      return <Container />;
    }
  }
}
const mapStateToProps = (state) => {
  return {
    notes: state.notes,
    fetchingNotes: state.fetchingNotes,
  };
};
export default connect(mapStateToProps, { getNotes })(Notes);
