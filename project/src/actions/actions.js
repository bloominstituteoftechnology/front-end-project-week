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