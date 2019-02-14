import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { fetchNotes, fetchSingleNote, filterNotes } from "../actions/index";
import NoteCard from "./NoteCard";

const ListDiv = styled.div`
  h1 {
    font-size: 1.8rem;
    padding: 60px 5% 20px;
  }
`;

// const TagList = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
// `;

// let colorWheel = 0;
// const colors = [
//   "mediumaquamarine",
//   "darkcyan",
//   "rebeccapurple",
//   "blue",
//   "green",
//   "red",
//   "orangered"
// ];

// const Tag = styled.div`
//   padding: 10px;
//   margin: 5px;
//   border: 1px solid darkcyan;
//   border-radius: 5px;
//   background-color: ${() => {
//     if (colorWheel > 5) {
//       colorWheel = 0;
//     } else {
//       // colorWheel += 0.5;
//     }
//     return colors[colorWheel];
//   }};
//   font-size: 1.2rem;
//   color: white;
// `;

const CardDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

class NoteList extends React.Component {
  componentDidMount() {
    this.props.fetchNotes();
  }

  gotoSingleNote = id => {
    this.props.fetchSingleNote(id);
    this.props.history.push(`/note/${id}`);
  };

  filterOnTag = tag => {
    if (tag !== "ALL") {
      this.props.filterNotes(
        this.props.notes.filter(item => item.tags.includes(tag))
      );
    } else {
      this.props.filterNotes(this.props.notes);
    }
  };

  render() {
    return (
      <ListDiv>
        <h1>Your Notes:</h1>
        {this.props.fetching ? (
          <h1>Please Wait</h1>
        ) : (
          <div>
            {/* <TagList>
              {this.props.allTags.map((item, index) => {
                return (
                  <Tag key={index} onClick={() => this.filterOnTag(item)}>
                    {item}
                  </Tag>
                );
              })}
            </TagList> */}
            <CardDiv>
              {this.props.filteredNotes
                .map(item => {
                  return (
                    <NoteCard
                      key={`${item.id}`}
                      note={item}
                      gotoSingleNote={this.gotoSingleNote}
                    />
                  );
                })
                .reverse()}
            </CardDiv>
          </div>
        )}
      </ListDiv>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    allTags: state.allTags,
    fetching: state.fetching,
    filteredNotes: state.filteredNotes
  };
};

export default connect(
  mapStateToProps,
  { fetchNotes, fetchSingleNote, filterNotes }
)(NoteList);
