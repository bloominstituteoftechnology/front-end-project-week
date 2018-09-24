//Actions
import { 
	CREATE_NOTE,
	DELETE_NOTE, 
	EDIT_NOTE, 
} from '../actions';

const loremIpsumNotes = [];

for (let i = 0; i < 9; i++) {
	loremIpsumNotes.push({
		noteTitle: `Note Name ${ i }`,
		noteContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dictum volutpat cursus. Mauris vitae odio at quam pharetra consectetur. Proin suscipit nibh et mauris dignissim, sit amet elementum nulla facilisis. Cras ac nibh mollis, dignissim neque in, tristique enim. Sed sed purus at justo scelerisque ultrices vel et erat. Suspendisse eu nulla ante. Pellentesque eros tellus, mollis a dapibus quis, ultrices at sem. Aliquam sed laoreet leo, ut fringilla justo. Aenean interdum aliquam quam, at consequat ligula eleifend sit amet. Donec sit amet nisl erat. Nunc condimentum arcu eget lacus ultricies, vulputate cursus erat pulvinar. Pellentesque nec tempus metus. Morbi viverra leo non elit egestas rhoncus. Nulla dignissim mauris id ipsum tincidunt, a faucibus sem lacinia. Mauris interdum aliquet quam, sit amet tincidunt justo dapibus vel.			\n\nPellentesque ac elementum nibh. Nam et congue sem, finibus hendrerit sapien. Maecenas et leo id massa dignissim egestas ac ac quam. Nullam congue dui quis lectus egestas lobortis. In ornare elit at rhoncus mollis. Cras velit risus, sollicitudin a quam nec, accumsan euismod quam. In eget interdum risus, nec lacinia tortor. Proin ut viverra turpis. Nunc nisi neque, aliquam tempor pulvinar non, sollicitudin in lorem. Etiam sagittis mauris sed tortor dictum ultricies.			\n\nProin accumsan ac massa efficitur suscipit. Fusce sagittis, arcu sed fermentum maximus, massa ante posuere mauris, in imperdiet ipsum ligula ac dui. Duis eget malesuada sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean risus ipsum, bibendum id magna in, dignissim vulputate lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed mollis ante augue, consectetur lacinia odio semper non. Aliquam lacus diam, cursus eget urna fringilla, semper tincidunt justo. Suspendisse potenti. Ut sit amet efficitur arcu, nec porttitor purus. Maecenas tincidunt tempus quam, sed mollis nibh iaculis vitae. Quisque sit amet massa ac libero condimentum posuere.			\n\nEtiam in eleifend orci. Vestibulum semper ex id sapien finibus, ac lobortis lectus maximus. Suspendisse potenti. Suspendisse condimentum posuere consectetur. Donec in metus id neque dignissim dictum non ut sem. Vestibulum ut sapien quis nisl consectetur auctor. Praesent orci enim, vestibulum ac neque quis, aliquam semper eros. Quisque vitae hendrerit augue. Aliquam eu massa sollicitudin sem finibus gravida eu commodo nunc. Duis rhoncus metus quis sapien aliquam, eget rhoncus massa ultrices. Quisque sed lectus et lectus elementum cursus. Nulla sit amet hendrerit nisl, in viverra nibh. Suspendisse potenti. Aenean dapibus pellentesque elementum.			\n\nMaecenas semper lacus sed nisi hendrerit eleifend. Vestibulum vitae quam finibus, fermentum dolor nec, bibendum turpis. Pellentesque malesuada, purus sed consequat viverra, eros enim laoreet diam, nec condimentum eros ex eget sapien. Cras nec mi dolor. Aenean id turpis at tortor vestibulum rutrum. Vivamus aliquam convallis aliquet. Aliquam erat volutpat. Aliquam consectetur nunc at metus ultricies, a tristique nibh sagittis. Mauris vel vestibulum nulla, sit amet ultrices ex. Aliquam convallis lectus non pretium lacinia. Proin porta, lorem id tristique malesuada, quam felis feugiat ipsum, quis auctor elit odio at purus. Nam bibendum lectus id nibh malesuada, vel tristique augue pulvinar. Phasellus tempus mauris euismod libero pretium luctus. Curabitur arcu enim, tempor in ante eget, viverra faucibus risus. Nulla rutrum sollicitudin rhoncus.',
	});
}

// Initial State
const initialState = {
	notes: loremIpsumNotes,
};

export const NotesReducer = (state = initialState, action) => {
	switch(action.type) {
		case CREATE_NOTE: {
			const newNotes = [ ...state.notes ];
			newNotes.push(action.payload);

			return { ...state, notes: newNotes };
		}

		case DELETE_NOTE: {
			return { ...state, notes: state.notes.filter((note, i) => i !== action.payload) };
		}

		case EDIT_NOTE: {
			const newNotes = [ ...state.notes ];
			newNotes[action.payload.id] = action.payload.note;

			return { ...state, notes: newNotes };
		}

		default:
		return state;
	}
}
