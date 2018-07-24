const ipsum ='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce gravida scelerisque vulputate. Quisque hendrerit nulla a tortor aliquam, eget imperdiet lorem scelerisque. Cras non orci sodales, fermentum eros ac, condimentum leo. Nunc facilisis viverra ligula a consequat. Nullam eget mattis dolor, id mollis est. Quisque tincidunt eros turpis, ut suscipit nisl tempus tristique. Nunc mi dui, lobortis vitae augue ut, varius lacinia lacus. Integer ultricies vestibulum odio nec mattis. Nullam consequat, nibh vel feugiat porta, augue odio venenatis urna, in fringilla quam libero vitae erat. Nulla mollis ligula ac iaculis condimentum. Suspendisse pharetra orci est, eleifend pulvinar justo commodo id.'

const initial = {
	posts: [
	{
	title:'test note',
	content:ipsum
	},
	{
	title:'another test',
	content:ipsum
	},
	{
	title:'last note of the row',
	content:ipsum
	},
	{
	title:'new row note',
	content:ipsum
	},
	]
};

const reducer = (state=initial,action) => {
switch (action.type){
default:
	return state;
}
};

export default reducer;