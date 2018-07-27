const ipsum ='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce gravida scelerisque vulputate. Quisque hendrerit nulla a tortor aliquam, eget imperdiet lorem scelerisque. Cras non orci sodales, fermentum eros ac, condimentum leo. Nunc facilisis viverra ligula a consequat. Nullam eget mattis dolor, id mollis est. Quisque tincidunt eros turpis, ut suscipit nisl tempus tristique. Nunc mi dui, lobortis vitae augue ut, varius lacinia lacus. Integer ultricies vestibulum odio nec mattis. Nullam consequat, nibh vel feugiat porta, augue odio venenatis urna, in fringilla quam libero vitae erat. Nulla mollis ligula ac iaculis condimentum. Suspendisse pharetra orci est, eleifend pulvinar justo commodo id.'

const initial = {
	posts: [
	{
	title:'test note',
	content:ipsum,
	id:0
	},
	{
	title:'another test',
	content:ipsum,
	id:1
	},
	{
	title:'last note of the row',
	content:ipsum,
	id:2
	},
	{
	title:'new row note',
	content:ipsum,
	id:3
	},
	],
	newPostTitle:'',
	newPostContent:'',
	posting:false,
	viewing:null
};

const reducer = (state=initial,action) => {
switch (action.type){
	case 'ADDING':
		return (
		{...state,posting:true,viewing:null}
		);
	case 'VIEW_ALL':
		return (
		{...state,posting:false,viewing:null}
		);
	case 'VIEW_ONE':
		return (
		{...state,viewing:action.payload}
		);
	case 'UPDATE_TITLE':
		return (
		{...state,newPostTitle:action.payload}
		);
	case 'UPDATE_CONTENT':
		return (
		{...state,newPostContent:action.payload}
		);
	case 'NEW_NOTE':
		return (
		{...state,newPostTitle:'',newPostContent:'',posting:false,
		posts:[...state.posts,{title:action.payload.title,content:action.payload.content,
		id:state.posts.length}]}
		);
	case 'ERROR':
		return (
		{...state,newPostTitle:'failed :('}
		);
default:
	return state;
}
};

export default reducer;