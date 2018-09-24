import { VIEWALL } from '../actions/action';

const grootText = "I am Groot. We are Groot. We are Groot. We are Groot. We are Groot. I am Groot. We are Groot. I am Groot. I am Groot. I am Groot. We are Groot. We are Groot. I am Groot. We are Groot. I am Groot. We are Groot. We are Groot. We are Groot. We are Groot. I am Groot. We are Groot. I am Groot. We are Groot. I am Groot. I am Groot. I am Groot. We are Groot. We are Groot. I am Groot. We are Groot. We are Groot. We are Groot. We are Groot. We are Groot. I am Groot. I am Groot. We are Groot. We are Groot. We are Groot. I am Groot. I am Groot. I am Groot. We are Groot. We are Groot. I am Groot. I am Groot. We are Groot. We are Groot. We are Groot. We are Groot. We are Groot. I am Groot. I am Groot. I am Groot. We are Groot. We are Groot. I am Groot. We are Groot. We are Groot. I am Groot. I am Groot. I am Groot. I am Groot. We are Groot. We are Groot. We are Groot. We are Groot. I am Groot. We are Groot. I am Groot. We are Groot. I am Groot. I am Groot. I am Groot. We are Groot."

const initial = {
notes : [
{title:'note1',content:grootText},
{title:'note2',content:grootText},
{title:'note3',content:grootText},
{title:'note4',content:grootText},
],
error:null,
viewAll:true,
viewOne:null,
editing:false,
adding:false,
deleting:false,
}

const reducer = (state=initial,action) => {
switch(action.type){
case VIEWALL:
return({...state, error:null, viewAll:true, viewOne:null, editing:false, adding:false, deleting:false});
default:
return state
}
}

export default reducer;