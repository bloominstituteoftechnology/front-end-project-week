import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {connect} from 'react-redux';
import { withRouter } from 'react-router';

const NoteDetailsDiv = styled.div`
  ${'' /* border: 1px solid green; */}
  display: flex;
  flex-direction: column;
  padding: 25px;
  background-color: white;
  height: 100vh;
  .links {
    ${'' /* border: 1px solid blue; */}
    padding: 15px;
    text-align: right;
    .link {
      ${'' /* border: 1px solid red; */}
      margin: 8px;
      color: gray;
      ${'' /* font-weight: bold */}
    }
  }
  h4 {
    font-weight: bold;
    margin-bottom: 10px;
  }
  p {
    line-height: 30px;
  }
`;

class NoteDetails extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        {(this.props.note) ?
          (
            <NoteDetailsDiv>
            <div className="links">
              <Link
                className="link"
                onClick={() => this.props.enableDelete()}
                to={`/all-notes/${this.props.note._id}/delete`}
              >delete</Link>
              <Link
                className="link"
                to={`/all-notes/${this.props.note._id}/edit`}
              >edit</Link>
              <Link
                className="link"
                to={`/all-notes/`}
              >back</Link>
            </div>
            <h4>{this.props.note.title}</h4>
            <p>{this.props.note.textBody}</p>
          </NoteDetailsDiv>
        ) :
        null}
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {state: store};//state is really props & store is store
}

const mapDispatchToProps = {

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NoteDetails));
