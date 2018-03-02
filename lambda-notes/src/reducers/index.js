import * as actions from '../actions/index';

const dateString = new Date().toUTCString();
const initialState = {
  users: [
    {
      id: 0,
      username: 'default',
      password: 'default',
      notes: [
        {
          id: 0,
          date: new Date(),
          dateString: dateString,
          checklist: [],
          title: 'Rick and Morty',
          body:
            "Rick and Morty is an American adult animated science-fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's late-night programming block Adult Swim. The series follows the misadventures of cynical mad scientist Rick Sanchez and his fretful, easily influenced grandson Morty Smith, who split their time between domestic life and interdimensional adventures. The series premiered on December 2, 2013, and the third season concluded on October 1, 2017. A fourth season has been mentioned, first by Harmon in a September 2017 interview, and later in the post-credits scene of the third season's finale.",
        },
        {
          id: 1,
          date: new Date(),
          dateString: dateString,
          checklist: [],
          title: 'Roland',
          body:
            'Roiland voices the eponymous characters, with Chris Parnell, Spencer Grammer, and Sarah Chalke voicing the rest of the family. The series originated from an animated short parody film of Back to the Future, The Real Animated Adventures of Doc and Mharti, created by Roiland for Channel 101, a short film festival co-founded by Harmon. When Adult Swim approached Harmon for television show ideas, he and Roiland decided to develop a program based on the short. The series has received universal acclaim for its originality, creativity, and humor.',
        },
        {
          id: 2,
          date: new Date() - 10000,
          dateString: dateString,
          checklist: [],
          title: 'Premise',
          body:
            "The show revolves around the adventures of the members of the Smith household, which consists of parents Jerry and Beth, their kids Summer and Morty, and Beth's father, Rick Sanchez, who lives with them as a guest. According to Justin Roiland, the family lives outside of Seattle in the U.S. state of Washington.[1] The adventures of Rick and Morty, however, take place across an infinite number of realities, with the characters travelling to other planets and dimensions through portals and Rick's flying car.",
        },
        {
          id: 3,
          date: new Date(),
          dateString: dateString,
          checklist: [],
          title: 'Development',
          body:
            "Rick and Morty was created by Justin Roiland and Dan Harmon. The duo first met at Channel 101, a non-profit monthly short film festival in Los Angeles co-founded by Harmon.[2] At Channel 101, participants submit a short film in the format of a pilot, and a live audience decides which pilots continue as a series. Roiland, then a producer on reality programming, began submitting content to the festival a year after its launch, in 2004. His pilots typically consisted of shock value—'sick and twisted' elements that received a confused reaction from the audience.[2] Nevertheless, Harmon took a liking to his humor and the two began collaborating. In 2006, Roiland was fired from working on a television series he regarded as intensely creatively stifling, and funneled his creative energies into creating a webisode for Channel 101. The result was The Real Animated Adventures of Doc and Mharti, an animated short starring parodies of Doc Brown and Marty McFly, characters from the Back to the Future film trilogy.[3] In the short, which Harmon would dub 'a bastardization, a pornographic vandalization', Doc Smith urges Mharti that the solution to all of his problems is to give him oral sex.[4] The audience reacted to it wildly, and Roiland began creating more shorts involving the characters, which soon evolved beyond his original intentions and their obvious origin within the film from which it was culled.[4][5] Harmon would later create and produce Community, an NBC sitcom, while Roiland would work primarily in voice acting for Disney's Fish Hooks and Cartoon Network's Adventure Time.",
        },
        {
          id: 4,
          date: new Date(),
          dateString: dateString,
          checklist: [],
          title: 'Writing',
          body:
            "The general formula of Rick and Morty consists of the juxtaposition of two conflicting scenarios: an extremely selfish, alcoholic grandfather dragging his grandson along for intergalactic and/or interdimensional adventures, intercut with domestic family drama.[4][6] This has led Harmon to describe the series as a cross between Matt Groening's two shows The Simpsons and Futurama, balancing family life with heavy science fiction.[10] The series is inspired by British-style storytelling, as opposed to traditional American family TV stories.[2] Roiland has stated his and Harmon's intentions for the series to lack traditional continuity, opting for discontinuous storylines 'not bound by rules'.[11] In producing the series' first season, episodes were occasionally written out of order. For example, 'Rick Potion #9' was the second episode written for the series, but was instructed to be animated as the fifth, as it would make more sense within the series' continuity.[2]",
        },
        {
          id: 5,
          date: new Date(),
          dateString: dateString,
          checklist: [],
          title: 'Episodes',
          body:
            "Many episodes are structured with use of a story circle, a Harmon creation based largely on Joseph Campbell's monomyth, or The Hero's Journey. Its two-act structure places the act break at an odd location in the stages of the monomyth: after The Meeting with the Goddess, instead of Atonement with the Father.[7] Harmon has stated that his inspiration behind much of the concept and humor for the series comes from various British television series, such as The Hitchhiker's Guide to the Galaxy and Doctor Who. He figures that the audience will only understand developments from Morty's point of view, but stated we dont want to be the companions. We want to hang out with the Doctor, we idolize the Doctor, but we dont think like him, and thats really interesting, Rick is diseased, hes mentally ill, hes an absolute lunatic because he lives on this larger scale.",
        },
        {
          id: 6,
          date: new Date(),
          dateString: dateString,
          checklist: [],
          title: 'Animation',
          body:
            "Animation for the show is done using Toon Boom Harmony, post-production work is done in Adobe After Effects, and background art is done in Adobe Photoshop.[15] Production of animation is handled by Bardel Entertainment in Canada.[16] Roiland's cartooning style is heavily indebted to The Simpsons, a factor he acknowledged in a 2013 interview, while also comparing his style to that of Pendleton Ward (Adventure Time) and J.G. Quintel (Regular Show): You'll notice mouths are kind of similar and teeth are similar, but I think thats also a stylistic thing that... all of us are kind of the same age, and were all inspired by The Simpsons and all these other shows were kind of subconsciously tapping into.[10] John Kricfalusis The Ren & Stimpy Show was another strong influence for Rick and Morty, which is why, according to Roiland, the small w-shaped mouths that the characters occasionally make is a reference to a similar expression that Ren frequently makes.[17] When recording dialogue, Roiland does a considerable amount of improvisation, in order to make the characters feel more natural.",
        },
        {
          id: 7,
          date: new Date(),
          dateString: dateString,
          checklist: [],
          title: 'Future',
          body:
            'Although there has not been an official renewal announcement by Adult Swim,[19] Dan Harmon talked about the possibility of creating more than ten episodes per season, in a September 2017 interview, where he stated I’m about to do season 4 of Rick and Morty and want to prove that I’ve grown.[20] On October 1, 2017, similarly to the second-season finale, the animated character Mr. Poopybutthole re-appeared in the post-credits scene of the third-season finale and said that it will be a long wait until the fourth season of the show.[21] Writer Ryan Ridley, in a December 2017 interview with The Detroit Cast,[22] said that he highly doubts there will not be a fourth season, but he does not expect it to air any sooner than late 2019.[23] In January 2018, Adult Swim told Variety that there is no timing to share on premiere or status of production.',
        },
        {
          id: 8,
          date: new Date(),
          dateString: dateString,
          checklist: [],
          title: 'Wubba Lubba Dub-Dub',
          body:
            "Wubba Lubba Dub-Dub is Rick's catchphrase, which he recurrently uses in the show, mostly in season one. He uses this phrase every time he's happy or makes a joke.Wubba Lubba Dub-Dub is Rick's catchphrase, which he recurrently uses in the show, mostly in season one. He uses this phrase every time he's happy or makes a joke.",
        },
      ],
    },
    {
      id: 1,
      username: 'test',
      password: 'test',
      notes: [],
    },
  ],
  current: 'login',
  note: null,
  results: [],
  remove: false,
  loggedIn: false,
  currentUserNotes: [],
  currentUser: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_BUTTON_CLICK:
      return { ...state, current: action.payload, remove: false };
    case actions.VIEW_BUTTON_CLICK:
      return { ...state, current: action.payload };
    case actions.ADD_NOTE:
      return { ...state, currentUserNotes: [...state.currentUserNotes, action.payload] };
    case actions.VIEW_NOTE:
      return { ...state, current: action.payload.current, note: action.payload.note };
    case actions.EDIT_NOTE_CLICKED:
      return { ...state, current: action.payload.current, note: action.payload.note };
    case actions.EDIT_NOTE:
      const removed = [
        ...state.currentUserNotes.slice(0, action.payload.index),
        ...state.currentUserNotes.slice(action.payload.index + 1),
      ];
      removed.splice(action.payload.index, 0, action.payload);
      return { ...state, currentUserNotes: removed };
    case actions.DELETE_NOTE:
      return {
        ...state,
        current: action.payload.current,
        currentUserNotes: [
          ...state.currentUserNotes.slice(0, action.payload.note.index),
          ...state.currentUserNotes.slice(action.payload.note.index + 1),
        ],
      };
    case actions.SEARCH_CLICK:
      return { ...state, current: action.payload };
    case actions.SEARCH_RESULTS_CLICKED:
      return { ...state, current: action.payload.current, results: action.payload.results };
    case actions.SORT_BUTTON_CLICKED:
      return { ...state, current: action.payload };
    case actions.DOWNLOAD_BUTTON_CLICKED:
      return { ...state, current: action.payload };
    case actions.REMOVE_EDIT:
      return { ...state, remove: action.payload };
    case actions.LOAD_USER_NOTES:
      return { ...state, currentUserNotes: action.payload.notes, currentUser: action.payload.user };
    case actions.NEW_USER_CREATION:
      return {
        ...state,
        currentUserNotes: action.payload.notes,
        users: [...state.users, action.payload],
        current: 'list',
        currentUser: action.payload,
      };
    case actions.HANDLE_LOG_OUT:
      const currentUsers = state.users;
      let userIndex = -1;
      currentUsers.forEach((user, index) => {
        if (user.id === action.payload.id) userIndex = index;
      });
      currentUsers[userIndex].notes = state.currentUserNotes;
      currentUsers.splice(userIndex, 1, action.payload);
      return { ...state, users: currentUsers, current: 'login' };
    case actions.UPDATE_CHECK_LIST:
      const currentNotes = state.currentUserNotes;
      const checklist = currentNotes[action.payload.index].checklist;
      checklist.push({
        note: action.payload.note,
        id: action.payload.checkID,
        index: checklist.length,
        checked: action.payload.checked,
      });
      return { ...state, currentUserNotes: currentNotes };
    case actions.TOGGLE_CHECK:
      const currentUsernotes = state.currentUserNotes;
      currentUsernotes.splice(state.note.index, 1, action.payload);
      return { ...state, currentUserNotes: currentUsernotes };
    default:
      return state;
  }
};
