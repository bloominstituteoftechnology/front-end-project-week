export const newNote = () => {
return (
	{type:'ADDING'}
	);
}

export const cancelNote = () => {
return (
	{type:'VIEWING'}
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