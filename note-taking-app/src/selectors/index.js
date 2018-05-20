import { createSelector } from 'reselect'

const searchNoteByText = (notes, searchText) => {
  let currentNotes = notes
  if (!currentNotes || !searchText) {
    return currentNotes
  }
  
  const filteredId = Object.keys(currentNotes)
    .filter(id => 
      currentNotes[id].title.toLowerCase().includes(searchText.toLowerCase())
      ||
      currentNotes[id].content.toLowerCase().includes(searchText.toLowerCase())
    )

  let filterObj = {}

  filteredId.forEach(id => filterObj[id] = currentNotes[id])

  return filterObj
}

const sortNoteBy = (notes, sortType) => {
  if (sortType === 'due') {
    return notes  
  }

  if (sortType === 'asc' || sortType === 'des') {
    return alphabetical_sort_object_of_objects(notes, 'title', sortType)
  }

  return notes
}

// StackOverflow Solution: Sorting objects inside an object by specific attribute
// Source: https://stackoverflow.com/questions/14286654/how-to-sort-a-js-object-of-objects
function alphabetical_sort_object_of_objects(data, attr, sortType) {
  var arr = [];
  for (var prop in data) {
      if (data.hasOwnProperty(prop)) {
          var obj = {};
          obj[prop] = data[prop];
          obj.tempSortName = data[prop][attr].toLowerCase();
          arr.push(obj);
      }
  }

  arr.sort(function(a, b) {
      var at = a.tempSortName,
          bt = b.tempSortName;
      return at > bt ? 1 : ( at < bt ? -1 : 0 );
  });

  var result = [];
  for (var i=0, l=arr.length; i<l; i++) {
      var obj = arr[i];
      delete obj.tempSortName;
      for (var prop in obj) {
          if (obj.hasOwnProperty(prop)) {
              var id = prop;
          }
      }
      var item = obj[id];
      if (sortType === 'asc'){
        result.push(item)
      } else {
        result.unshift(item)
      }
  }
  return result;
}

const convertObjectToArray = (notesObj) => {
  return Object.keys(notesObj)
  .map(id => {
    return {
      id: id,
      title: notesObj[id].title,
      content: notesObj[id].content
    }
  })
}

export const makeSearchNoteByText = () => createSelector(
  searchNoteByText,
  (notes) => ({ notes })
)

export const makeSortNoteBy = () => createSelector(
  sortNoteBy,
  (notes) => ({ notes })
)

export const makeConvertObjectToArray = () => createSelector(
  convertObjectToArray,
  (notes) => ({ notes })
)

