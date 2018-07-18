import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import MarkdownText from './MarkdownText';
import { getNoteById } from '../reducers/index';
import { fetchNoteById } from '../actions/index';
import TagDisplay from './TagDisplay';
import styled from 'styled-components';

const StyledViewNote = styled.div`
  padding: ${props => props.theme.dimensions.viewNote.padding};
  overflow-wrap: break-word;

  .topControls {
    text-align: end;
    padding: ${props => props.theme.dimensions.viewNote.topControlsPadding};
  }

  h1 {
    padding: ${props => props.theme.dimensions.viewNote.headingPadding};
  }

  p {
    font-size: ${props => props.theme.dimensions.viewNote.textFontSize};
    line-height: ${props => props.theme.dimensions.viewNote.textLineHeight};
    white-space: pre-line;
  }

  a {
    font-family: ${props => props.theme.font.heading};
    font-size: ${props => props.theme.dimensions.viewNote.linkFontSize};
    color: ${props => props.theme.color.headingText};
    padding: ${props => props.theme.dimensions.viewNote.linkPadding};
  }
  a:visited {
    color: ${props => props.theme.color.clickedAnchor};
  }
`;

class ViewNote extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchNoteById(id);
  }

  render() {
    const { id } = this.props.match.params;
    const { textBody, title, tags } = this.props.note;

    return (
      <StyledViewNote>
        <div className="topControls">
          <Link to={`/edit/${id}`}>edit</Link>
          <Link to={`/view/delete/${id}`}>delete</Link>
        </div>
        <div className="note">
          <h1>{title}</h1>
          <MarkdownText mdText={textBody} />
        <TagDisplay tags={tags} writable={false} />
        </div>
      </StyledViewNote>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  return {
    ...ownProps,
    note: getNoteById(state, id)
  };
};
export default connect(
  mapStateToProps,
  { fetchNoteById }
)(ViewNote);
