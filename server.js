const express = require('express');
const cors = require('cors');
const port = 5000;

const server = express();
server.use(express.json());
server.use(cors());

const sendUserError = (msg, res) => {
  res.status(422);
  res.json({ Error: msg });
  return;
};

let nextId = 10;

const getNextId = () => {
  return ++nextId;
};

// const gen = () => {
//   const res = [];
//   for(let i=0; i < 10; i++){
//     nextId++;
//     res.push({id: nextId, title: `This is a title for ${i + 1}`, content: `Lorem Ipsum is simply dummy
//     text of the printing and typesetting industry. Lorem Ipsum has been the
//     industry's standard dummy text ever since the 1500s, when an unknown printer
//      took a galley of type and scrambled it to make a type specimen book.`});
//   }
//   return res;
// }
//
// const notes = gen();

let notes = [
{
id: 1,
title: "Bacon Ispum",
content: "Bacon ipsum dolor amet flank picanha leberkas, jerky cupim beef ribs ham pork loin tri-tip turkey kevin rump shankle. Kielbasa pork chop picanha, ball tip corned beef cow venison burgdoggen short ribs ham tongue. Pancetta turducken spare ribs drumstick. Pork doner bresaola, pig venison tongue rump salami kielbasa buffalo beef ribs brisket filet mignon. Meatball ground round corned beef alcatra capicola pork belly filet mignon. Leberkas tri-tip salami t-bone kevin biltong cupim jowl shankle ham pig ribeye.Filet mignon kevin pastrami flank, pork loin short ribs ham hock cow meatball bacon doner brisket biltong ground round. Chicken short loin pig tri-tip, ham hock cupim boudin swine jowl shoulder turducken salami doner t-bone. Fatback biltong pancetta sausage alcatra shoulder jerky chicken venison salami cupim burgdoggen short ribs swine boudin. Beef ribs beef landjaeger meatball, pork belly tongue ham. Cow buffalo shoulder bresaola chicken pork belly alcatra."
},
{
id: 2,
title: "Cat Ispum",
content: "Cereal boxes make for five star accommodation . Meow for food, then when human fills food dish, take a few bites of food and continue meowing meowwww refuse to leave cardboard box yet swat at dog, so human is washing you why halp oh the horror flee scratch hiss bite scratch and meow in empty rooms. Relentlessly pursues moth friends are not food meow meow or lick sellotape lick left leg for ninety minutes, still dirty yet claw drapes. Cat is love, cat is life scratch scream at teh bath. Unwrap toilet paper swat turds around the house swat at dog, or love you, then bite you. You have cat to be kitten me right meow if it fits, i sits for sniff all the things and kitty scratches couch bad kitty litter kitter kitty litty little kitten big roar roar feed me but have secret plans or jump five feet high and sideways when a shadow moves. Scratch at fleas, meow until belly rubs, hide behind curtain when vacuum cleaner is on scratch strangers and poo on owners food. Annoy owner until he gives you food say meow repeatedly until belly rubs, feels good who's the baby hopped up on catnip cat is love, cat is life. Annoy the old grumpy cat, start a fight and then retreat to wash when i lose spot something, big eyes, big eyes, crouch, shake butt, prepare to pounce or always hungry but decide to want nothing to do with my owner today. Head nudges play riveting piece on synthesizer keyboard chase red laser dot but lick human with sandpaper tongue. Curl into a furry donut dont wait for the storm to pass, dance in the rain or scoot butt on the rug eat the fat cats food or decide to want nothing to do with my owner today stare at wall turn and meow stare at wall some more meow again continue staring for use lap as chair. Give me some of your food give me some of your food give me some of your food meh, i don't want it yowling nonstop the whole night yet cough hairball on conveniently placed pants then cats take over the world. Cough hairball, eat toilet paper cat dog hate mouse eat string barf pillow no baths hate everything scream for no reason at 4 am and sit in box i like cats because they are fat and fluffy. Pet my belly, you know you want to; seize the hand and shred it! run around the house at 4 in the morning brown cats with pink ears. Need to chase tail leave dead animals as gifts ooh, are those your $250 dollar sandals? lemme use that as my litter box, stare at guinea pigs attack the dog then pretend like nothing happened dead stare with ears cocked so my water bowl is clean and freshly replenished, so i'll drink from the toilet. Scratch the box. Lick arm hair sit in window and stare oooh, a bird, yum if it smells like fish eat as much as you wish but attack feet. Attack the dog then pretend like nothing happened pretend you want to go out but then don't yet chase mice chew foot cats secretly make all the worlds muffins. Chase after silly colored fish toys around the house curl up and sleep on the freshly laundered towels poop in a handbag look delicious and drink the soapy mopping up water then puke giant foamy fur-balls but grab pompom in mouth and put in water dish but ooh, are those your $250 dollar sandals? lemme use that as my litter box. Meow all night having their mate disturbing sleeping humans. All of a sudden cat goes crazy annoy owner until he gives you food say meow repeatedly until belly rubs, feels good. Pretend you want to go out but then don't."
},
{
id: 3,
title: "CupCake Ispum",
content: "Cupcake ipsum dolor sit amet. Sweet sugar plum chocolate bar powder tart tiramisu. Marshmallow chupa chups tiramisu ice cream gingerbread bear claw sweet roll oat cake. Gummi bears chupa chups oat cake pudding chocolate jelly-o cheesecake muffin chupa chups. Croissant sugar plum gummies croissant marshmallow. Sweet cake jelly-o biscuit wafer. Pie donut chocolate pastry sesame snaps chocolate powder sweet dessert. Cookie liquorice soufflé soufflé tart danish tootsie roll sweet roll candy canes. Cake fruitcake bear claw tart biscuit carrot cake soufflé muffin pudding.Halvah lollipop marzipan marzipan chocolate bar marshmallow gingerbread chocolate. Ice cream jelly beans jelly-o bonbon dragée tiramisu. Lemon drops gummies jelly-o gummies cotton candy caramels. Pie dragée bear claw cupcake. Liquorice brownie chocolate cake macaroon fruitcake pastry tart gummies. Donut bonbon cupcake candy pastry carrot cake croissant chocolate cake. Lollipop tart sweet liquorice jujubes muffin. Croissant cotton candy halvah marzipan. Sweet roll jelly donut fruitcake. Carrot cake gingerbread candy canes bear claw."
},
{
id: 4,
title: "Hairy Lipsum",
content: "Handlebar stiff upper lip des lynam Milkshake issues mouth coiffure, cappuccino catcher mouth coiffure Milkshake issues des lynam decathlon champion robert winston handlebar stiff upper lip, caterpillar des lynam dolor sit amet cappuccino catcher facial accessory decathlon champion stiff upper lip bruce forsyth robert winston yosemite sam Milkshake issues handlebar mouth coiffure? Worn with distinction casual style mustachioed tache inspector clouseau imperial dick dastardly."
},
{
id: 5,
title: "Hipster Ipsum",
content: "Lorem ipsum dolor amet banh mi godard 8-bit man braid, flexitarian blog echo park sriracha. Kombucha af helvetica banh mi kinfolk artisan jean shorts hexagon, four loko heirloom bicycle rights. Vegan semiotics gluten-free trust fund franzen celiac distillery bitters bushwick tilde man braid austin. Bitters freegan asymmetrical microdosing, tattooed biodiesel edison bulb chambray. Fingerstache hammock street art offal prism. Messenger bag coloring book hoodie, aesthetic authentic man braid four dollar toast pabst woke tilde occupy austin vexillologist.Humblebrag messenger bag kale chips wolf freegan. Gluten-free farm-to-table photo booth mixtape ennui. Master cleanse knausgaard dreamcatcher stumptown hot chicken, kale chips heirloom. Slow-carb ugh hexagon la croix bitters schlitz crucifix pabst semiotics blue bottle waistcoat chambray. Ethical bicycle rights pour-over tousled, lo-fi palo santo taxidermy asymmetrical chia raw denim health goth. Cronut farm-to-table 8-bit wayfarers tote bag. Iceland blog snackwave everyday carry put a bird on it."
},
{
id: 6,
title: "Hodor Ipsum",
content: "Hodor, hodor. Hodor. Hodor, hodor hodor HODOR hodor, hodor hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR hodor, hodor hodor; hodor hodor hodor! Hodor hodor... Hodor hodor hodor hodor? Hodor hodor HODOR! Hodor HODOR hodor, hodor hodor?! Hodor hodor... Hodor hodor hodor - hodor... Hodor hodor hodor. Hodor. Hodor, hodor hodor... Hodor hodor hodor, hodor. Hodor hodor?"
},
{
id: 7,
title: "Sagan Ipsum",
content: "Take root and flourish, birth vanquish the impossible, preserve and cherish that pale blue dot. Hydrogen atoms Rig Veda Drake Equation, permanence of the stars preserve and cherish that pale blue dot astonishment. Flatland paroxysm of global death another world rings of Uranus descended from astronomers something incredible is waiting to be known prime number. Hundreds of thousands vastness is bearable only through love circumnavigated a mote of dust suspended in a sunbeam!Globular star cluster kindling the energy hidden in matter. Explorations ship of the imagination, a mote of dust suspended in a sunbeam permanence of the stars quasar Flatland laws of physics, Flatland worldlets something incredible is waiting to be known a billion trillion consciousness, worldlets. Corpus callosum finite but unbounded permanence of the stars bits of moving fluff decipherment culture? Worldlets take root and flourish! Are creatures of the cosmos great turbulent clouds! Hydrogen atoms! Gathered by gravity, trillion bits of moving fluff preserve and cherish that pale blue dot, the sky calls to us laws of physics. Hypatia.Science Vangelis, billions upon billions birth cosmic ocean. Encyclopaedia galactica, light years! Rig Veda muse about cosmic fugue prime number Tunguska event. Are creatures of the cosmos the sky calls to us take root and flourish. Encyclopaedia galactica citizens of distant epochs Tunguska event hearts of the stars white dwarf cosmic fugue, citizens of distant epochs muse about star stuff harvesting star light tesseract trillion extraordinary claims require extraordinary evidence, dispassionate extraterrestrial observer hydrogen atoms Drake Equation, Jean-Francois Champollion a mote of dust suspended in a sunbeam and billions upon billions upon billions upon billions upon billions upon billions upon billions?"
},
{
id: 8,
title: "Samuel L Ipsum",
content: "Proin suscipit luctus orci placerat fringilla. Donec hendrerit laoreet risus eget adipiscing. Suspendisse in urna ligula, a volutpat mauris. Sed enim mi, bibendum eu pulvinar vel, sodales vitae dui. Pellentesque sed sapien lorem, at lacinia urna. In hac habitasse platea dictumst. Vivamus vel justo in leo laoreet ullamcorper non vitae lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum ullamcorper rutrum."
},
{
id: 9,
title: "Zombie Ipsum",
content: "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead."
},
];

server.get('/notes', (req, res) => {
  res.json(notes);
});

server.post('/notes', (req, res) => {
  const { title, content } = req.body;
  const id = getNextId();
  const newNote = { id:id, title:title, content:content };
  notes.push(newNote);
  nextId++;
  res.json(notes);
});

server.delete('/notes/:id', (req, res) => {
  const { id } = req.params;

  notes = notes.filter(note => note.id !== Number(id));

  res.send(notes);
});

server.put('/notes/:id', (req, res) => {
  const { id } = req.params;

  const noteIndex = notes.findIndex(note => note.id == id);

  if (noteIndex > -1) {
    const note = { ...notes[noteIndex], ...req.body };

    notes = [
      ...notes.slice(0, noteIndex),
      note,
      ...notes.slice(noteIndex + 1),
    ];
    res.send(notes);
  } else {
    res.status(404).send({ msg: 'Note not found' });
  }
});

server.listen(port, err => {
  if (err) console.log(err);
  console.log(`server is listening on port ${port}`);
});