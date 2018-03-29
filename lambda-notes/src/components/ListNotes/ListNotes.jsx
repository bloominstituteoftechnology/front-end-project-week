import React, { Component } from 'react';
import Note from '../Note/Note';

class ListNotes extends Component {
   constructor() {
     super();
     this.state = {
       filteredTags : [],
       filtering: false,
     }
   }

   filterTag = () => {
    let tagToFilter = document.getElementById('filterTagsInput').value;
    
    if (this.props.notes.includes(tagToFilter)) {
      this.setState({
        filteredTags: [this.state.filteredTags, tagToFilter],
        filtering: true,
      });


    }//end if


    document.getElementById('filterTagsInput').value = "";
   }//end filterTag

   removeTagFromFilter = () => {

   }

   render() {
      return (
         <div className="yourNotes">
          <h2> {this.props.name}'s Notes:</h2> <p> {this.state.filtering ? 
             this.state.filteredTags.map((tag, i) => tag )
             :
              null
              } </p>
          <div id="filterTags">
                <input type="text" id="filterTagsInput"  placeholder="Enter tags"/> 
                <button id="filterTagButton" onClick={() => this.filterTag()}> Filter</button>
            </div>
          <div className="noteList">
           {this.state.filtering ? //if true, only show notes that contain filtered tags
          (this.props.notes.map((note, i) => (
            //check for same tag
            (note.tags.some(tag => this.state.filteredTags.includes(tag)) ?
             (<Note key={i} index={i} title={note.title} content={note.content} tags={note.tags}/>) : null)
          ))
        ) 
          :
          //if false display all notes
          (this.props.notes.map((note, i) => (
            note.title ? 
            (<Note key={i} index={i} title={note.title} content={note.content} tags={note.tags}/>)
            : (null)
          )))
          }
            
            </div>
         </div>
      )
   }
}

//   note.tags.some(tag => this.state.filteredTags.includes(tag))
export default ListNotes;