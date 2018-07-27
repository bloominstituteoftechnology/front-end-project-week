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