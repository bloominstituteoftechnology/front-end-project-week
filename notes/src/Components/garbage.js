import axios from "axios";

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


//App.js
// componentDidMount() {
//     axios.get("https://fe-notes.herokuapp.com/note/get/all")
//         .then(res=> {
//             console.log("GET DATA", res);
//             // let notes=res.data;//res.data is the array we get all the data from server
//             // let newNotes=this.state.notes.filter(note=>{
//             //     for(let i=0;i<notes.tags.length;i++){
//             //         if (notes.tags[i]==="Arpita") {
//             //             return true;
//             //         }
//             //     }
//             //     return false;
//             // })
//
//             this.setState({notes: res.data})
//         })
//
//         .catch (err=>{
//
//             console.log("Error in get", err) ;
//
//         })
//
// }


