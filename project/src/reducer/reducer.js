import { VIEWALL,VIEWONE,DELETE } from '../actions/action';

const grootText = "I am Groot. We are Groot. We are Groot. We are Groot. We are Groot. I am Groot. We are Groot. I am Groot. I am Groot. I am Groot. We are Groot. We are Groot. I am Groot. We are Groot. I am Groot. We are Groot. We are Groot. We are Groot. We are Groot. I am Groot. We are Groot. I am Groot. We are Groot. I am Groot. I am Groot. I am Groot. We are Groot. We are Groot. I am Groot. We are Groot. We are Groot. We are Groot. We are Groot. We are Groot. I am Groot. I am Groot. We are Groot. We are Groot. We are Groot. I am Groot. I am Groot. I am Groot. We are Groot. We are Groot. I am Groot. I am Groot. We are Groot. We are Groot. We are Groot. We are Groot. We are Groot. I am Groot. I am Groot. I am Groot. We are Groot. We are Groot. I am Groot. We are Groot. We are Groot. I am Groot. I am Groot. I am Groot. I am Groot. We are Groot. We are Groot. We are Groot. We are Groot. I am Groot. We are Groot. I am Groot. We are Groot. I am Groot. I am Groot. I am Groot. We are Groot."

const initial = {
notes : [
{title:'note1',content:grootText},
{title:'note2',content:grootText},
{title:'note3',content:grootText},
{title:'note4',content:grootText},
],
error:null,
view:'all',
editing:false,
adding:false,
deleting:false,
}

const reducer = (state=initial,action) => {
switch(action.type){
case VIEWONE:
return({...state,view:action.payload});
case VIEWALL:
return({...state, error:null, view:'all', editing:false, adding:false, deleting:false});
case DELETE:
let copyNotes = state.notes.splice('');
copyNotes.splice(state.view,1);
return ({...state,view:'all',notes:copyNotes,deleting:false})
default:
return state
}
}

export default reducer;