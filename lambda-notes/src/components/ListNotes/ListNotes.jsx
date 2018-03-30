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
     console.log("filterTag clicked")
    let tagToFilter = document.getElementById('filterTagsInput').value;
    console.log(tagToFilter);

    //check if tag used, modify this for search but search content, titles, tags
    for(let i = 0; i < this.props.notes.length; i++){
      if(this.props.notes[i].tags.includes(tagToFilter) && !(this.state.filteredTags.includes(tagToFilter))){
        console.log("tag found, adding to filter");
        this.setState({
          filteredTags: [...this.state.filteredTags, tagToFilter],
          filtering: true,
        });
      }//end if
    }// end for loop
    



    console.log(this.state.filteredTags);
    document.getElementById('filterTagsInput').value = "";
   }//end filterTag

   removeTagFromFilter = () => {

   }

   deleteTag = (tagId) => {
    this.state.filteredTags.splice(tagId, 1);
    if(this.state.filteredTags.length === 0) {
      this.setState( {
        filtering: false,
        filteredTags: this.state.filteredTags,
      })
    }else {
      this.setState({
        filteredTags: this.state.filteredTags,
      });
    }

 }

   render() {
      return (
         <div className="yourNotes">
          <h2> {this.props.name}'s Notes:</h2> <p> {this.state.filtering ? 
             this.state.filteredTags.map((tag, i) => <span className="filteredTag"> {tag} </span> )
             :
              null
              } </p>
          <div id="filterTags">
                <input type="text" id="filterTagsInput"  placeholder="Enter tags"/> 
                <button id="filterTagButton" onClick={() => this.filterTag()}> Filter</button>
                {this.state.filteredTags.map((tag, i) => 
               <span className="viewNoteTag" key={i} onClick={() => this.deleteTag(i)}>  {tag}  </span>
            )}
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

export default ListNotes;