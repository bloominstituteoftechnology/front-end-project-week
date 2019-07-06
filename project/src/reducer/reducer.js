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
	viewing:null,
	editing:false,
	deleting:false
};

const reducer = (state=initial,action) => {
switch (action.type){
	case 'ADDING':
		return (
		{...state,posting:true,viewing:null,deleting:false,editing:false}
		);
	case 'VIEW_ALL':
		return (
		{...state,posting:false,viewing:null,deleting:false}
		);
	case 'VIEW_ONE':
		return (
		{...state,viewing:action.payload}
		);
	case 'EDIT':
		let onePost = state.posts.filter(post => post.id===action.payload);
		return (
		{...state,posting:true,editing:true,
		newPostTitle:onePost[0].title,newPostContent:onePost[0].content}
		);
	case 'EDIT_NOTE':
		let newPost=state.posts[state.viewing];
		newPost.title=action.payload.title;
		newPost.content=action.payload.content;
		let postCopy = state.posts;
		postCopy[state.viewing] = newPost;
		return (
		{...state,viewing:null,posting:false,editing:false,
		newPostTitle:'',newPostContent:'',
		posts:postCopy,
		}
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
		id:(state.posts.length)}]}
		);
	case 'DELETE':
		return (
		{...state,deleting:true}
		);
	case 'CANCEL_DELETE':
		return (
		{...state,deleting:false}
		);
	case 'DELETE_CONFIRM':
		let copy = state.posts.slice();
		copy.splice(state.viewing,1);
		for(let i=0;i<copy.length;i++){
		copy[i].id = i;
		}
		return(
		{...state,deleting:false,viewing:null,posts:copy}
		);
	case 'ERROR':
		return (
		{...state,newPostTitle:'error :('}
		);
default:
	return state;
}
};

export default reducer;