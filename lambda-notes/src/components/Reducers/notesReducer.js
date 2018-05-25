import {
  FETCH,
  LOGOUT,
} from '../Actions';

// const generateDummyNotes = () => {
//   const dummyArr = [];
//   for (let i = 0; i < 3; i++) {
//     dummyArr.push({
//       id: i.toString(),
//       title: 'Note Title',
//       text: `Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis consectetur adipiscing elit. Nullam odio ex, pulvinar sed lectus eu, vestibulum tempor ante. Sed scelerisque ut massa nec elementum. Praesent ut sagittis dui, vel imperdiet libero. Aenean vel tempus metus. Aliquam interdum est mauris, vitae aliquet nisl posuere sit amet. Pellentesque quis leo venenatis, euismod lacus non, tincidunt dolor. Mauris bibendum sem quis lorem sodales pulvinar. Nam nisl magna, ultricies ullamcorper quam nec, semper rhoncus nisl. \n\n Curabitur posuere, nibh ac rhoncus tempus, turpis massa euismod dolor, vel suscipit eros sapien eget odio. In imperdiet nibh sit amet lobortis sagittis. Sed sit amet finibus velit. Phasellus et ultricies sem, in sollicitudin massa. Quisque ornare ex sit amet neque lacinia facilisis. Sed quis viverra lectus. Cras sagittis sagittis convallis. Praesent augue mi, gravida non libero sit amet, porttitor finibus est. Praesent aliquet facilisis augue quis feugiat. Cras laoreet at dui iaculis euismod. \n\n Suspendisse mollis consequat purus, id pulvinar neque sodales a. Sed et dolor semper, vestibulum justo id, gravida urna. Morbi arcu tortor, molestie eu cursus sit amet, consequat quis mauris. Integer vitae nulla sed lacus porta faucibus in nec odio.`,
//     })
//   }
//   const finalArr = dummyArr.concat([
//     {
//       id: `3`,
//       title: `A normal note`,
//       text: `This is a normal note. I am typing a lot of words to have an example note for you. Do you appreciate the words that I am typing to you? I hope so. I type this much because I love you. In a platonic and fraternal way of course. Love is a complicated subject, isn't it? Love might be a spectrum of emotions just lumped into one catch-all word. It can mean a fondness of another, lust with an emotional attachment, or just simply pure appreciation of someone. Appreciation, deep appreciation, might be a form of love that we should strive to enjoy and share with others everyday.`,
//     },
//     {
//       id: `4`,
//       title: `Markdown!!!`,
//       text: `# Using Markdown \n\n * Making nice looking unordered lists is easy. \n\n * Just use asterisks to represent each list item. \n\n * You can make ordered list by using numbers instead of asterisks.`,
//     },
//   ]);
//   return finalArr;
// }

const initialState = {
  notes: [],
  loading: false,
  error: null,
}

export const notesReducer = ( state = initialState, action ) => {
  switch(action.type) {
    case FETCH:
      let newState = [];
      for (let key in action.payload) {
        const { title, text, date, tags } = action.payload[key];
        const tagArr = tags ? tags.split(',').map(tag => tag.trim().toLowerCase()) : []; 
        newState.push({
          id: key,
          title: title,
          text: text,
          date: date,
          tags: tagArr,
        });
      }
      return {
        ...state,
        notes: newState,
      };
    case LOGOUT:
      return {
        ...state,
        notes: [],
      }
    default:
      return {
        ...state,
      };
  }
}