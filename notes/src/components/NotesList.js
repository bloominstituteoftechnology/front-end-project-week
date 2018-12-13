// import React from "react";
// import SmallNote from "./SmallNote";
// import { MainContent, NoteList, Search } from "../styled/NotesList";

// import { connect } from "react-redux";
// import { fetchNotes, filterNotes } from "../actions";

// class NotesList extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       search: ""
//     };
//   }

//   componentDidMount() {
//     this.props.fetchNotes();
//     window.scrollTo(0, 0);
//   }

//   handleChange = e => {
//     this.setState({ [e.target.name]: e.target.value });
//     this.props.filterNotes(e.target.value);
//   };

//   render() {
//     const notes =
//       this.props.filtered.length > 0 ? this.props.filtered : this.props.notes;
//     return (
//       <MainContent>
//         <h2>Your Notes:</h2>
//         <Search>
//           <input
//             type="text"
//             name="search"
//             value={this.state.search}
//             placeholder="&#x1F50D; Search by title"
//             onChange={this.handleChange}
//           />
//         </Search>
//         <NoteList>
//           {notes.map(note => {
//             return (
//               <SmallNote
//                 key={note._id}
//                 note={note}
//                 history={this.props.history}
//               />
//             );
//           })}
//         </NoteList>
//       </MainContent>
//     );
//   }
// }

// const mapStateToProps = state => {
//   return {
//     notes: state.notes,
//     filtered: state.filtered,
//     fetchingNotes: state.fetchingNotes,
//     error: state.error
//   };
// };

// export default connect(
//   mapStateToProps,
//   { fetchNotes, filterNotes }
// )(NotesList);
