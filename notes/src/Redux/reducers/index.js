import { ADD_NOTE, DELETE_NOTE, EDIT_NOTE } from '../actions';

const initialState = {
  notes: [
    {
      id: 0,
      title: 'Vivamus',
      body:
        "Curabitur aliquam massa eu justo placerat, quis gravida arcu consequat. Morbi porttitor mattis nulla non posuere. Duis est felis, rutrum non efficitur id, euismod a ipsum. Phasellus a urna gravida, hendrerit dolor eget, commodo metus. Ut eget semper lorem. Donec arcu elit, eleifend vitae massa ut, tincidunt pellentesque sapien. Nunc sed fermentum sapien. Curabitur id magna posuere, efficitur velit in, placerat justo. Maecenas consectetur tristique purus in ultrices. Fusce ultricies hendrerit interdum. Cras sollicitudin tincidunt efficitur. Maecenas in eleifend urna. Suspendisse porta et massa non fringilla. Donec ut enim ut ligula bibendum convallis. Integer eget faucibus lorem.\n\nUt sit amet urna malesuada, lacinia dolor scelerisque, sagittis erat. Sed id augue quam. Fusce ex enim, ullamcorper at dui non, tristique varius risus. Donec efficitur dapibus varius. Maecenas non lorem quis velit congue ultrices. Nulla ac facilisis purus. Morbi vitae sagittis risus. Sed elementum metus nec est maximus vestibulum.",
    },
    {
      id: 1,
      title: 'Ut Gravida: Urna At Ultrices Rutrum',
      body:
        "Maecenas enim mauris, sodales non imperdiet eget, posuere eget quam. Mauris viverra facilisis dui, nec aliquam tellus porta id. Phasellus consequat varius urna, sagittis finibus risus efficitur vel. Vivamus sodales metus eu quam porta auctor quis at mi. Vivamus quis dapibus metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla ut ex eu lectus placerat tincidunt vel vitae nulla. Vivamus malesuada varius ornare. Aliquam molestie eros mi, a sagittis velit vulputate volutpat. Duis eleifend semper iaculis. Ut dictum eros ac ultrices facilisis. Maecenas pretium odio eu mauris hendrerit, sollicitudin cursus erat malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;\n\nPraesent accumsan, diam vel porta vulputate, sapien ex efficitur mauris, sed porta est massa eu tellus. Phasellus in magna sit amet est dapibus tincidunt id vitae lorem. Cras nec turpis ante. Morbi ac nunc at justo tincidunt porta. Sed posuere diam erat, luctus ultricies arcu vulputate vitae. Cras convallis ullamcorper ex in congue. Praesent in ultrices nisl. Duis nec bibendum purus, eu dignissim metus. Suspendisse et orci sed diam viverra lobortis.",
    },
    {
      id: 2,
      title: 'Sed Finibus',
      body:
        "Etiam in felis accumsan, tincidunt quam id, finibus nunc. Fusce mattis sed ipsum ut aliquet. Nullam at magna sed velit fermentum sollicitudin accumsan ut magna. Curabitur pretium nulla tincidunt, accumsan magna tempus, faucibus nisi. Integer ac lectus ut odio pulvinar finibus sit amet in ipsum. Donec fringilla mauris nec est tristique, quis euismod urna semper. Aliquam erat volutpat. Etiam tristique felis enim, in convallis mi vehicula et. Nulla viverra, justo nec accumsan malesuada, purus dolor semper est, accumsan tristique magna odio ut ex. Etiam volutpat nunc id dictum finibus. Quisque vitae felis id leo accumsan efficitur. Sed luctus ut nisl id placerat. Praesent nec nibh velit.\n\nVivamus efficitur libero quis diam viverra, non commodo quam semper. Donec ut euismod massa. Nullam placerat nisl purus, et malesuada lacus ullamcorper ut. Ut vulputate at mauris vel euismod. Vivamus efficitur nec leo at volutpat. Phasellus lacinia, orci id fermentum dictum, ligula est pharetra felis, nec porta sem turpis ac mauris. Nullam tincidunt ante magna.",
    },
    {
      id: 3,
      title: 'Integer Porttitor',
      body:
        "Proin vehicula nunc nibh, sagittis mattis urna pretium a. Cras ut dapibus nulla. Mauris vitae turpis bibendum, tempus erat ut, eleifend nisi. Nam accumsan ligula accumsan dolor molestie, eu fringilla ipsum tincidunt. Fusce ligula libero, dapibus eu euismod non, dictum id neque. Phasellus ipsum lectus, ullamcorper in neque sed, blandit congue lectus. Maecenas at accumsan odio, non tincidunt metus. Sed quis pulvinar eros, eget fringilla nibh.\n\nPraesent quis mi ut erat pulvinar volutpat. Fusce molestie imperdiet sapien vitae feugiat. Etiam placerat eros non leo feugiat, vitae fermentum ipsum mattis. Nunc convallis at erat ut mattis. Praesent ac nunc elementum sem gravida scelerisque. Duis lorem dui, interdum vel odio eu, sodales pellentesque ligula. Nunc at cursus justo, quis placerat ex. In sodales, sapien commodo vehicula aliquet, augue dui varius tellus, sed molestie justo nunc suscipit nisi. Fusce a nisi magna. Mauris bibendum ut turpis nec semper. Mauris tincidunt velit nunc. Fusce eget nulla sit amet magna consequat vehicula at eu enim. Vivamus auctor lectus nec commodo laoreet. Aliquam vitae felis arcu. Sed ac enim pretium, varius leo ac, imperdiet arcu. Praesent eget fermentum metus.",
    },
    {
      id: 4,
      title: 'Sed Eget Orci Efficitur',
      body:
        "Suspendisse efficitur dapibus accumsan. Integer ut magna vitae augue pharetra commodo quis quis purus. Proin euismod lacus nec turpis dignissim gravida. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus fringilla rutrum lectus. Integer gravida, purus nec aliquam pretium, ligula lectus porta tellus, at semper velit turpis in est. Quisque ipsum lacus, lacinia malesuada leo eget, rutrum ullamcorper lacus. Donec dui odio, ultricies vitae aliquam vehicula, tempor ac nibh. In hac habitasse platea dictumst. Phasellus in justo tincidunt, hendrerit nisl vitae, pretium lorem. Pellentesque ac lobortis neque. Fusce et varius arcu. Donec suscipit lorem in sem finibus ultricies. Nunc semper justo diam, ut convallis ligula suscipit venenatis. In varius eros ante, vel pulvinar nisi mattis vitae. Aliquam erat volutpat.\n\nVestibulum non maximus odio. Cras varius orci tortor, vitae volutpat ligula interdum et. Quisque volutpat purus ut orci malesuada blandit at ut ipsum. Donec sit amet maximus metus. Nullam metus nulla, ullamcorper quis libero at, vehicula rhoncus sem. Vivamus lectus tellus, scelerisque et malesuada ac, tristique eu nulla. Nullam scelerisque, nibh id semper consectetur, erat neque eleifend nibh, vel tempor lacus ligula posuere risus. Vestibulum tellus velit, imperdiet in orci congue, elementum ullamcorper justo.",
    },
    {
      id: 5,
      title: 'Curabitur Sit Amet',
      body:
        'Vestibulum et quam ac orci commodo condimentum. Morbi nec purus commodo, laoreet sem id, tristique felis. Ut sit amet scelerisque enim, et semper nunc. Morbi semper tortor ut ex dictum, sit amet euismod nulla vulputate. Suspendisse vitae mi ligula. Quisque tellus tortor, sodales in aliquet nec, tincidunt non massa. Proin condimentum fermentum tellus in dignissim. Donec laoreet nulla id diam pulvinar, at gravida erat tempus. Quisque viverra vehicula scelerisque. Nam sit amet bibendum leo. Quisque ultrices tortor vel dignissim efficitur. Proin luctus sit amet nulla nec fermentum. Praesent egestas sapien ante, et ultricies mauris eleifend ullamcorper. Sed in dolor vel turpis vestibulum mattis nec a massa.\n\nMauris sagittis ac diam id congue. Aenean ligula dolor, aliquam ut consectetur eu, condimentum at metus. Nunc quis volutpat odio, sed volutpat eros. Mauris convallis, velit non fringilla consequat, dolor nibh facilisis ex, at faucibus dolor mi ac nibh. Vestibulum elementum eros et luctus consectetur. Morbi consequat, eros ut rutrum elementum, lacus diam tincidunt leo, nec viverra justo ante eget mi. Cras sed eros ac ipsum lacinia dignissim at eu nulla. Nunc ut enim sed libero scelerisque sodales et ut tortor. Mauris at ex elit. Vivamus varius mi lobortis risus vestibulum, at mattis velit scelerisque. Donec lacinia vestibulum purus et aliquet. Phasellus sed accumsan nulla, at maximus lorem. Maecenas commodo, urna at fermentum lacinia, augue justo ultrices mi, non cursus justo massa nec nibh. Etiam varius ligula eget ultrices tempus.',
    },
  ],
  counter: 6,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            title: action.payload.title,
            body: action.payload.body,
            id: state.counter,
          },
        ],
        counter: ++state.counter,
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter(each => {
          return each.id !== action.payload;
        }),
      };
    case EDIT_NOTE:
      let newNotes = state.notes.map(each => {
        if (each.id === action.id) {
          if (action.payload.title === '') action.payload.title = each.title;
          if (action.payload.body === '') action.payload.body = each.body;
          return {
            title: action.payload.title,
            body: action.payload.body,
            id: action.id,
          };
        }
        return each;
      });

      return {
        ...state,
        notes: newNotes,
      };
    default:
      return state;
  }
};

export default reducer;
