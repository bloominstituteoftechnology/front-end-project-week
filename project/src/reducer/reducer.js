import { VIEWALL,VIEWONE,DELETE,ADDING,CREATING,EDITING,EDIT,LOGIN,VIEWMY,LOGOUT } from '../actions/action';

const grootText = "I am Groot. We are Groot. We are Groot. We are Groot. We are Groot. I am Groot. We are Groot. I am Groot. I am Groot. I am Groot. We are Groot. We are Groot. I am Groot. We are Groot. I am Groot. We are Groot. We are Groot. We are Groot. We are Groot. I am Groot. We are Groot. I am Groot. We are Groot. I am Groot. I am Groot. I am Groot. We are Groot. We are Groot. I am Groot. We are Groot. We are Groot. We are Groot. We are Groot. We are Groot. I am Groot. I am Groot. We are Groot. We are Groot. We are Groot. I am Groot. I am Groot. I am Groot. We are Groot. We are Groot. I am Groot. I am Groot. We are Groot. We are Groot. We are Groot. We are Groot. We are Groot. I am Groot. I am Groot. I am Groot. We are Groot. We are Groot. I am Groot. We are Groot. We are Groot. I am Groot. I am Groot. I am Groot. I am Groot. We are Groot. We are Groot. We are Groot. We are Groot. I am Groot. We are Groot. I am Groot. We are Groot. I am Groot. I am Groot. I am Groot. We are Groot."

const initial = {
notes : [
{title:'note1',content:grootText,poster:'david'},
{title:'note2',content:grootText,poster:'david'},
{title:'note3',content:grootText,poster:'groot'},
{title:'note4',content:grootText,poster:'guest'},
],
error:null,
view:'all',
editing:null,
adding:false,
loggedIn:null,
users: [
'david','guest','student','groot',
],
}

const reducer = (state=initial,action) => {
switch(action.type){
case VIEWONE:
return({...state,view:action.payload});
case VIEWALL:
return({...state, error:null, view:'all', editing:null, adding:false});
case DELETE:
let copyNotes = state.notes.splice('');
copyNotes.splice(state.view,1);
return ({...state,view:'all',notes:copyNotes})
case ADDING:
return({...state,adding:true,view:null,editing:null})
case CREATING:
let copyNotes2 = state.notes.splice('');
copyNotes2.push({title:action.title,content:action.content,poster:state.loggedIn});
return({...state,view:'all',adding:false,notes:copyNotes2})
case EDITING:
return({...state,view:null,editing:action.payload})
case EDIT:
let copyNotes3 = state.notes.splice('');
copyNotes3[state.editing]={title:action.title,content:action.content,poster:state.loggedIn}
return({...state,notes:copyNotes3,view:'all',editing:null,})
case LOGIN:
return ({...state,loggedIn:action.payload})
case VIEWMY:
return ({...state,view:'my',adding:false,editing:null,})
case LOGOUT:
return ({...state,error:null,view:'all',editing:null,adding:false,loggedIn:null,})
default:
return state
}
}

export default reducer;