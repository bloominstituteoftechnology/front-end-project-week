// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { Button } from 'reactstrap';

// import { getNote, deleteNote } from '../actions';

// class DeleteNote extends Component {
//     render() {
//         const id = this.props.match.params.id
//             return (
//                 <div>
//                     <h1> My Note </h1>
//                         {!this.props.note ?
//                             <h2> loading notes</h2>: null}
//                                 <h2> {this.props.note.title} </h2>
//                                 <p> {this.props.note.body} </p>
//                                 <Button onClick={this.props.deleteNote(id)}><Link to={`/`}> Delete Note </Link></Button>
//                 </div>
//             );
//         }   


//     componentDidMount() {
//         const id = (this.props.match.params.id)
//         this.props.getNote(id);
//     }
// }
//     const mapStateToProps = (state) => {
//         return {
//             note:state.note,
//         }
//     }
    
//   export default connect(mapStateToProps, { getNote, deleteNote })(DeleteNote);
