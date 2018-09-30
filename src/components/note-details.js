import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {connect} from 'react-redux';
import { withRouter } from 'react-router';
import ReactMarkdown from 'react-markdown';

class NoteDetails extends Component {
  // getTags = () => {
  //   if(this.props.note.tags.isArray){
  //     (this.props.note.tags.map(tag => {
  //         return (<div className="tag">{tag}</div>)
  //       }
  //   ))
  // } else if (typeof this.props.note.tags == "string"){
  //   (this.props.note.tags.split(',').map(tag => {
  //   return <div className="tag">{tag}</div>
  // }))
  // } else {
  //   return (<div className="noTags"> none </div>)
  // }
  // }

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
                to={`/all-notes/${this.props.note.id}/delete`}
              >delete</Link>
              <Link
                className="link"
                to={`/all-notes/${this.props.note.id}/edit`}
              >edit</Link>
              <Link
                className="link"
                to={`/all-notes/`}
              >back</Link>
            </div>
            <div className="noteDetails">
              <h4>{this.props.note.title}</h4>
              {<ReactMarkdown>{this.props.note.textBody}</ReactMarkdown>}
              {/* <div className="tags">Tags:
                {this.getTags()}
              </div> */}
            </div>
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

const NoteDetailsDiv = styled.div`
  ${'' /* border: 1px solid green; */}
  display: flex;
  flex-direction: column;
  padding: 25px;
  ${'' /* background-color: white; */}
  background-color: #F3F3F3;
  height: 100vh;
  .noteDetails {
    background-color: white;
    border: 1px solid lightgray;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    color: black;
    padding: 10px;
    h4 {
      font-weight: bold;
      margin-bottom: 10px;
      text-decoration: underline;
    }
    p {
      line-height: 30px;
    }
    .tags{
      ${'' /* border: 1px solid lightgray; */}
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      div{
        margin: 3px;
        padding: 5px;
      }
      .tag {
        border: 1px solid lightgray;
      }
    }
  }
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

`;