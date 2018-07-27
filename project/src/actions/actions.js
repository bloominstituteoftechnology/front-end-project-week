export const newNote = () => {
return (
	{type:'ADDING'}
	);
}

export const cancelNote = () => {
return (
	{type:'VIEW_ALL'}
	);
}

export const viewNoteById = (id) => {
return (
	{type:'VIEW_ONE',payload:id}
	);
}

export const changeTitle = (value) => {
return (
{type:'UPDATE_TITLE',payload:value}
	);
}

export const changeContent = (value) => {
return (
{type:'UPDATE_CONTENT',payload:value}
	);
}

export const submitNote = (value) => {
if(value.title!=='' && value.content!==''){
return (
{type:'NEW_NOTE',payload:value}
	);
}
else {
return (
{type:'ERROR'}
);
}
}