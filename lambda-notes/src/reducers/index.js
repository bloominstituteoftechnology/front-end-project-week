import { ERROR, ADD_NOTES, DELETE_NOTE } from "../actions";

const initialState = {
  notes: [
    { noteNum: 1, noteTitle: 'Note One', noteContent: 'Chuck swine jowl ham frankfurter. Chicken salami t-bone kevin chuck ribeye pork loin pancetta leberkas short ribs jowl frankfurter andouille. Hamburger ball tip ribeye beef ribs rump t-bone shankle meatloaf sirloin kevin pork loin. Alcatra chicken sausage pork loin. Tail corned beef cupim ball tip. Tenderloin jowl bresaola, porchetta boudin corned beef fatback chuck tongue leberkas beef jerky swine prosciutto. Landjaeger jerky tri-tip pastrami porchetta doner rump cow sirloin brisket capicola kielbasa frankfurter tenderloin venison.' },
    { noteNum: 2, noteTitle: 'Note Two', noteContent: 'Pooping rainbow while flying in a toasted bread costume in space chase ball of string chew foot, and poop on grasses. Why must they do that flop over. Favor packaging over toy sleep nap and knock over christmas tree spread kitty litter all over house sweet beast. Use lap as chair give attitude poop on grasses sleep nap. Vommit food and eat it again purr while eating yet meowing non stop for food shove bum in owners face like camera lens. Intently stare at the same spot stand in front of the computer screen purr for no reason stare at the wall' },
    { noteNum: 3, noteTitle: 'Note Three', noteContent: 'Gingerbread cake jelly pudding jelly beans. Fruitcake gingerbread wafer wafer gingerbread apple pie marshmallow. Biscuit jelly cookie dragée brownie dessert carrot cake macaroon bonbon. Unerdwear.com liquorice marshmallow fruitcake caramels dessert gingerbread. Cupcake caramels biscuit macaroon. Cookie fruitcake chocolate bar donut bonbon tiramisu cake croissant. Pastry gingerbread pastry danish halvah sweet muffin jelly. Macaroon cake icing halvah marshmallow applicake. Jelly-o cupcake lemon drops applicake macaroon donut.' },
    { noteNum: 4, noteTitle: 'Note Four', noteContent: 'Introvert jazz cafes having a few beers self-deprecating humor. Degree in philosophy Vampire Weekend introvert self-deprecating humor really hoppy beers, grilling tacos really hoppy beers medical school Im looking for. Family is very important to me bikes trying this for the first time Breaking Bad Im really good at bored at home.' },
    { noteNum: 5, noteTitle: 'Note Five', noteContent: 'Occupy McSweeneys roof party biodiesel letterpress asymmetrical. Sustainable brunch pug, put a bird on it tilde lumbersexual gluten-free banh mi chambray mumblecore pickled. Yr retro hashtag, pork belly drinking vinegar Blue Bottle disrupt butcher. Health goth small batch plaid vegan. Twee gluten-free sustainable wayfarers VHS. Fixie deep v craft beer, Williamsburg beard drinking vinegar artisan mustache yr hoodie plaid. Craft beer letterpress Kickstarter, quinoa irony sartorial freegan ennui fashion axe before they sold out sriracha migas Shoreditch slow-carb.' },
    { noteNum: 6, noteTitle: 'Note Six', noteContent: 'I recommend you dont fire until youre within 40,000 kilometers. You did exactly what you had to do. You considered all your options, you tried every alternative and then you made the hard choice. Your head is not an artifact! Im afraid I still dont understand, sir. You enjoyed that. Some days you get the bear, and some days the bear gets you. Wouldnt that bring about chaos? Fate. It protects fools, little children, and ships named Enterprise. Mr. Worf, you do remember how to fire phasers? I am your worst nightmare! What? Were not at all alike! A lot of things can change in twelve years, Admiral. The look in your eyes, I recognize it. You used to have it for me.' },
    { noteNum: 7, noteTitle: 'Note Seven', noteContent: 'Do you see any Teletubbies in here? Do you see a slender plastic tag clipped to my shirt with my name printed on it? Do you see a little Asian child with a blank expression on his face sitting outside on a mechanical helicopter that shakes when you put quarters in it? No? Well, thats what you see at a toy store. And you must think youre in a toy store, because youre here shopping for an infant named Jeb.' },
    { noteNum: 8, noteTitle: 'Note Eight', noteContent: 'Chuck swine jowl ham frankfurter. Chicken salami t-bone kevin chuck ribeye pork loin pancetta leberkas short ribs jowl frankfurter andouille. Hamburger ball tip ribeye beef ribs rump t-bone shankle meatloaf sirloin kevin pork loin. Alcatra chicken sausage pork loin. Tail corned beef cupim ball tip. Tenderloin jowl bresaola, porchetta boudin corned beef fatback chuck tongue leberkas beef jerky swine prosciutto. Landjaeger jerky tri-tip pastrami porchetta doner rump cow sirloin brisket capicola kielbasa frankfurter tenderloin venison.' },
    { noteNum: 9, noteTitle: 'Note Nine', noteContent: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum' },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    // case FETCHING_NOTES:
    //   return Object.assign({}, state, {
    //     fetchingNotes: true
    //   });
    // case FETCHED_NOTES:
    //   return Object.assign({}, initialState, {
    //     notes: action.notes
    //   });
    case ERROR:
      return Object.assign({}, state, {
        error: action.errorMessage
      });
    case ADD_NOTES:
      return Object.assign({}, state, {
        addingNote: true,
        notes: []
      });
    case DELETE_NOTE:
      return Object.assign({}, state, {
        addingNote: true,
        notes: []
      });

    default:
      return state;
  }
};
