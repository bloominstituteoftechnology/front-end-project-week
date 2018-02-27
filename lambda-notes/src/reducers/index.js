import { ADD_NOTE } from '../actions';
import { DELETE_NOTE } from '../actions';

const initialState = {
  notes: [
    {
      title: 'Cultist',
      text: '“If only it were all so simple! If only there were evil people somewhere insidiously committing evil deeds, and it were necessary only to separate them from the rest of us and destroy them. But the line dividing good and evil cuts through the heart of every human being. And who is willing to destroy a piece of his own heart?” - Aleksandr Solzhenitsyn',
    },
    {
      title: 'Star Vampire',
      text: 'The ghastly cackling reverberated in the dead stillness of the night, the sardonic tittering of a monstrous rook - and then the blood began to drip from somewhere above...',
    },
    {
      title: 'The Dunwich Horror',
      text: 'The ancient powder from the professor\'s cracked leather pouch fell, shimmering, upon an outline of which I am unable to contain the shape in my mind.',
    },
    {
      title: 'Maniac',
      text: 'Though the misbegotten soul yet held the aspect of a man, at the first wretched, poison syllable that fell from his lips, I knew him to be a footsoldier of R\'Lyeh.',
    },
    {
      title: 'Fire Vampire',
      text: 'At first, the warmth was a pleasant relief in the frigid November air - but only for a moment.',
    },
    {
      title: 'Dhole',
      text: 'Below him the ground was festering with gigantic Dholes, and even as he looked, one reared up several hundred feet and leveled a bleached, viscous end at him.',
    },
    {
      title: 'Dark Young',
      text: 'The mouths was like leaves and the whole thing was like a tree in the wind, a black tree with lots of branches trailing to the ground, and a whole lot of roots ending in hoofs. And that green slime dribbling out of the mouths and down the legs was like sap!...',
    },
    {
      title: 'Nightgaunt',
      text: 'When I was six or seven, I used to be tormented incessantly with a peculiar type of waking nightmare, in which monstrous entities lurking in the shadows would snatch me up and carry me off.',
    },
    {
      title: 'Hound of Tindalos',
      text: 'The curves are angles. The future is ending. The doors are walls. The walls are teeth.',
    },
  ],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return Object.assign({}, {
        notes: [
          ...state.notes,
          {
            title: action.payload.title,
            text: action.payload.text,
            id: action.id,
          }
        ]
      });

    case DELETE_NOTE:
      console.log("Deleting note ", action.id);
      return Object.assign({}, {
        notes: state.notes.map(note => {
          if (note.id !== action.id) return note;
        })
      });

    default:
      return state;
  }
};