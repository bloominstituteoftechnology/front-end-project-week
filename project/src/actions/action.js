export const VIEWALL = 'VIEWALL';
export const VIEWONE = 'VIEWONE';
export const DELETE = "DELETE";



export const viewall = () => {
return ({type:VIEWALL});
}

export const viewone = (index) => {
return ({type:VIEWONE,payload:index});
}

export const deleteNote = () => {
return ({type:DELETE});
}