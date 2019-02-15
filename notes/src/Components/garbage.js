{}/*handleCreateNote = (event) => {*///     this.setState({rightPanel:"CreateNote"})
// }
//
// handleViewNotes=(event) => {
//     this.setState({rightPanel:"AllNotes"})
// }
//render() {
// if (this.state.rightPanel == "AllNotes") {
//     return (
//         <div className="myApp">
//             <div className="first">
//                 <h1>Lambda Notes</h1>
//                 <h2>
//                     <button className="leftbutton" onClick={this.handleViewNotes}>View Your Notes</button>
//                 </h2>
//                 <button className="leftbutton" onClick={this.handleCreateNote}> +Create new note </button>
//             </div>
//
//             <div className="second">
//                 <h3>Your Notes:</h3>
//                 <NoteList notes={this.state.notes}/>
//
//             </div>
//         </div>
//     );
// } else if (this.state.rightPanel == "CreateNote") {
//     return (
//         <div className="myApp">
//             <div className="first">
//                 <h1>Lambda Notes</h1>
//                 <h2>
//                     <button className="leftbutton" onClick={this.handleViewNotes}>View Your Notes</button>
//                 </h2>
//                 <button className="leftbutton" onClick={this.handleCreateNote}> +Create new note </button>
//
//             </div>
//
//             <div className="second">
//                 <h3>Your Notes:</h3>
//                 <NoteForm createFunc={this.createNewNote}/>
//
//             </div>
//         </div>
//     );
// }
