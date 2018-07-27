export const newNote = () => {
return (
	{type:'ADDING'}
	);
}

export const cancelNote = (post) => {
return (
	{type:'VIEWING',payload:post}
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