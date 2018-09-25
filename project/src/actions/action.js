export const VIEWALL = 'VIEWALL';
export const VIEWONE = 'VIEWONE';
export const VIEWMY= "VIEWMY";
export const DELETE = "DELETE";
export const ADDING = "ADDING";
export const CREATING = "CREATING";
export const EDITING = "EDITING";
export const EDIT ="EDIT";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

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

export const login = (user) => {
return({type:LOGIN,payload:user})
}

export const viewmy = () => {
return {type:VIEWMY}
}

export const logout= () => {
return ({type:LOGOUT})
}