import React, { Component } from 'react';
import Note from '../Note/Note';

class ListNotes extends Component {
   constructor() {
     super();
     this.state = {
       filteredTags : [],
       filtering: false,
       searching: false,
       searchWords : [],
       searchTerms : "Term not found",
     }
     
   }

   componentDidMount() {
    document.getElementById('searchedWords').style.display = 'none';
   }

   filterTag = () => {
    let tagToFilter = document.getElementById('filterTagsInput').value;

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
    
    document.getElementById('filterTagsInput').value = "";
   }//end filterTag

   search = () => {
    let word = document.getElementById('searchInput').value;

    for(let i = 0; i < this.props.notes.length; i++) {
      let note = this.props.notes[i];
      if(note.content.search(word) !== -1 || note.title.search(word) !== -1 || note.tags.includes(word)) {
        console.log('term found');
        this.setState({
          searching: true,
          searchWords: [...this.state.searchWords, word],
          searchTerms: `Click to clear search: ${[...this.state.searchWords, word]}`,
        });
        break;
      }
    }
    document.getElementById('searchedWords').style.display = 'block';
    document.getElementById('searchInput').value = "";
   }

   clearSearch = () => {
    document.getElementById('searchInput').value = "";
    document.getElementById('searchedWords').style.display = 'none';
    this.setState({
      searching: false,
      searchWords: [],
      searchTerms: "Term not found"
    });
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

    dragTask = (event) => {
      
    }

    startDragState = () => {

    }

    reorderArray = () => {

      this.props.reorder()
    }

    handleKeyPress = event => {
      if(event.key === 'Enter') {
        this.search();
      }
    }

   render() {
      return (
         <div className="yourNotes">
         <div id="searchWrapper">
          <input type="text" id="searchInput"  placeholder="Enter search term" onKeyPress={e => this.handleKeyPress(e)}/> 
              <div id="searchedWords" onClick={() => this.clearSearch()}> {this.state.searchTerms} </div>
         </div>
          <h2> {this.props.name}'s Notes:</h2> 
          <div id="filterTags">

          <p> {this.state.filtering ? <span id="filteringText"> Filtering: </span> : null} {this.state.filtering ? 
             this.state.filteredTags.map((tag, i) => <span className="filteredTag"> {tag} </span> )
             :
              null
              } </p>

                <input type="text" id="filterTagsInput"  placeholder="Enter tags"/> 
                <button id="filterTagButton" onClick={() => this.filterTag()}> Filter</button>
                {this.state.filteredTags.map((tag, i) => 
               <span className="viewNoteTag" key={i} onClick={() => this.deleteTag(i)}>  {tag}  </span>
            )}
            </div>
          <div className="noteList">
            
            {this.state.searching ? 
            //if true, word was found. display notes with found word:
              (
                this.props.notes.map((note, i) => (
                //check for same tag
                 (note.tags.some(tag => this.state.searchWords.includes(tag))) ||
                 (this.state.searchWords.some(word => note.content.search(word) !== -1 )) ||
                  (this.state.searchWords.some(word => note.title.search(word) !== -1 )) ?
                 (<Note key={i} index={i} title={note.title} content={note.content} tags={note.tags} />) : null
             )))
            :
            
            //searching is false, check for filtering
            (this.state.filtering ? //if true, only show notes that contain filtered tags
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
              )
          
          }



            
            </div>
         </div>
      )
   }
}

//draggable="true" onDrag={(event) => this.dragTask(event)}

export default ListNotes;