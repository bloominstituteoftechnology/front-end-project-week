import React from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';

import { makeSearchNoteByText, makeSortNoteBy, makeConvertObjectToArray } from '../selectors';

import NoteCard from './NoteCard';
import DroppableCol from './DroppableCol';

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

/**
* Moves an item from one list to another list.
*/
const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

class Notes extends React.Component {
  state = {
      list1: [],
      list2: [],
      list3: [],
      list4: []
  };
    id2List = {
      droppable1: 'list1',
      droppable2: 'list2',
      droppable3: 'list3',
      droppable4: 'list4',
  };
  componentDidMount = () => {
    const notesObj = this.props.notes
    let notes = notesObj ? Object.keys(notesObj) : []
    notes = notes.map(id => {
      const obj = {
        id: id,
        title: notesObj[id].title,
        content: notesObj[id].content
      }
      return obj
    })
    this.setState({
      list1: notes.slice(0,2),
      list2: notes.slice(2,3),
      list3: notes.slice(3,5),
      list4: notes.slice(5),
    })
  }

  getList = id => this.state[this.id2List[id]];

  onDragEnd = result => {
      const { source, destination } = result;
      // dropped outside the list
      if (!destination) {
          return;
      }

      // move in the same list
      if (source.droppableId === destination.droppableId) {
          const items = reorder(
              this.getList(source.droppableId),
              source.index,
              destination.index
          );

          let state = { items };

          switch (source.droppableId) {
            case 'droppable2':
                state = { list2: items }
            case 'droppable3':
                state = { list3: items }
            case 'droppable4':
                state = { list4: items }
          }

          this.setState(state);
      } else {
        // move to different list
          const result = move(
              this.getList(source.droppableId),
              this.getList(destination.droppableId),
              source,
              destination
          );

          const sourceListNum = source.droppableId.slice(-1)
          const destinationListNum = destination.droppableId.slice(-1)
          this.setState({
              [`list${sourceListNum}`]: result[source.droppableId],
              [`list${destinationListNum}`]: result[destination.droppableId],
          });
      }
  };

  render() {
    const {notes, sortBoxOpen, searchBoxOpen} = this.props
    const {list1, list2, list3, list4} = this.state
    console.log(this.props)
    return (
        <div style={getNotesStyle(searchBoxOpen, sortBoxOpen)}>
            { (!sortBoxOpen && !searchBoxOpen) ?
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <DroppableCol id={1} list={list1}/>
                    <DroppableCol id={2} list={list2}/>
                    <DroppableCol id={3} list={list3}/>
                    <DroppableCol id={4} list={list4}/>
                </DragDropContext>
                :
                // <div>
                notes && Object.keys(notes).map((id) => {
                    return (          
                        <NoteCard key={id} id={id} {...notes[id]} sortBoxOpen={sortBoxOpen} searchBoxOpen={searchBoxOpen}/>
                    )
                })
                // </div>
            }
        </div>
    )
  }
}
  

const mapStateToProps = () => {
    const searchNoteByText = makeSearchNoteByText()
    const sortNoteBy = makeSortNoteBy()
    return (state) => {
        if (state.toolsReducer.searchBoxOpen) {
            const { notes } = searchNoteByText(state.notesReducer.notes, state.toolsReducer.searchText)
            return {
                notes,
                searchBoxOpen: state.toolsReducer.searchBoxOpen
            }
        } else if (state.toolsReducer.sortBoxOpen) {
            const { notes } = sortNoteBy(state.notesReducer.notes, state.toolsReducer.sortType)
            console.log(notes)
            return {
                notes,
                sortBoxOpen: state.toolsReducer.sortBoxOpen
            }
        }
        const { notes } = state.notesReducer
        const { sortBoxOpen, searchBoxOpen } = state.toolsReducer
        return {
            notes,
            sortBoxOpen,
            searchBoxOpen,
        }
        
    }
}

const getNotesStyle = (searchBoxOpen, sortBoxOpen) => ({
    display: 'flex',
    flexWrap: (!searchBoxOpen && !sortBoxOpen) ? 'none': 'wrap',
    justifyContent: (!searchBoxOpen && !sortBoxOpen) ? 'none': 'space-around',
})

export default connect(mapStateToProps, {})(Notes);