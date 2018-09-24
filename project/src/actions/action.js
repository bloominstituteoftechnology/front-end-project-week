export const VIEWALL = 'VIEWALL';
export const VIEWONE = 'VIEWONE';
export const DELETE = "DELETE";
export const ADDING = "ADDING";
export const CREATING = "CREATING";
export const EDITING = "EDITING";
export const EDIT ="EDIT";

export const viewall = () => {
return ({type:VIEWALL});
}

export const viewone = (index) => {
return ({type:VIEWONE,payload:index});
}

export const deleteNote = () => {
return ({type:DELETE});
}

export const addNew = () => {
return ({type:ADDING});
}

export const createNote = (title,content) => {
return({type:CREATING,title:title,content:content});
}

export const editNote = (id) => {
return({type:EDITING,payload:id});
}

export const edit = (title,content) => {
return({type:EDIT,title:title,content:content});
}