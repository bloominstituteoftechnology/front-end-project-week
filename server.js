const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;
const app = express();

let nextId = 10;

let notes = [
  {
    id: 1,
    title: "Example Note",
    content: "You can fill in your __notes__ with any *information* you'd like. You can use `markdown` to style your note and add images or code snippets. Actually, adding images has not yet been implemented.\n \nHere is a code snippet: \n```javascript\nvar example = \"hello world\";\n```\n \nAnd here is an example of a heading: \n### Heading"
  },
  {
    id: 2,
    title: "Cat Phuuurs",
    content: "Lick face hiss at owner, pee a lot, and meow repeatedly scratch at fence purrrrrr eat muffins and poutine until owner comes back sit on human pushes butt to face, give me attention or face the wrath of my claws. Knock dish off table head butt cant eat out of my own dish ask for petting, always hungry and stares at human while pushing stuff off a table claw your carpet in places everyone can see - why hide my amazing artistic clawing skills?.\n\nEat prawns daintily with a claw then lick paws clean wash down prawns with a lap of carnation milk then retire to the warmest spot on the couch to claw at the fabric before taking a catnap do i like standing on litter cuz i sits when i have spaces, my cat buddies have no litter i live in luxury cat life yet dream about hunting birds but attempt to leap between furniture but woefully miscalibrate and bellyflop onto the floor; what's your problem? i meant to do that now i shall wash myself intently chase ball of string. Pee in human's bed until he cleans the litter box friends are not food, meeeeouw. Attack the dog then pretend like nothing happened paw at your fat belly for claw drapes, or always ensure to lay down in such a manner that tail can lightly brush human's nose roll over and sun my belly so hide when guests come over. While happily ignoring when being called. Pet me pet me don't pet me stare at wall turn and meow stare at wall some more meow again continue staring , scratch or hit you unexpectedly give attitude. Spend all night ensuring people don't sleep sleep all day peer out window, chatter at birds, lure them to mouth yet paw at your fat belly. Meow to be let in chew iPad power cord cat mojo shake treat bag.\n\nWhy must they do that sit on human hack up furballs. Lie on your belly and purr when you are asleep jumps off balcony gives owner dead mouse at present then poops in litter box snatches yarn and fights with dog cat chases laser then plays in grass finds tiny spot in cupboard and sleeps all day jumps in bathtub and meows when owner fills food dish the cat knocks over the food dish cat slides down the water slide and into pool and swims even though it does not like water fall over dead (not really but gets sypathy)."
  },
  {
    id: 3,
    title: "A Potter Note",
    content: "#### Accio filler text!\n```\nvar accio = 'filler text'\n```\nThestral dirigible plums, Viktor Krum hexed memory charm Animagus Invisibility Cloak three-headed Dog. Half-Blood Prince Invisibility Cloak cauldron cakes, hiya Harry! Basilisk venom Umbridge swiveling blue eye Levicorpus, nitwit blubber oddment tweak. Chasers Winky quills The Boy Who Lived bat spleens cupboard under the stairs flying motorcycle.\n\nSirius Black Holyhead Harpies, you’ve got dirt on your nose. Floating candles Sir Cadogan The Sight three hoops disciplinary hearing. Grindlewald pig’s tail Sorcerer's Stone biting teacup. Side-along dragon-scale suits Filch 20 points, Mr. Potter."
  },
  {
    id: 4,
    title: "Hogwarts Notes",
    content: "Prefect’s bathroom Trelawney veela squashy armchairs, SPEW: Gamp’s Elemental Law of Transfiguration. Magic Nagini bezoar, Hippogriffs Headless Hunt giant squid petrified. Beuxbatons flying half-blood revision schedule, Great Hall aurors Minerva McGonagall Polyjuice Potion. Restricted section the Burrow Wronski Feint gnomes, quidditch robes detention, chocolate frogs. \n\nErrol parchment knickerbocker glory Avada Kedavra Shell Cottage beaded bag portrait vulture-hat. Twin cores, Aragog crimson gargoyles, Room of Requirement counter-clockwise Shrieking Shack. Snivellus second floor bathrooms vanishing cabinet Wizard Chess, are you a witch or not?\n\nBoggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma and Parvati Sorting Hat Minister of Magic blue turban remember my last."
  },
  {
    id: 5,
    title: "Hodor!",
    content: "Hodor, Hodor. Hodor, Hodor, Hodor. Hodor, Hodor, Hodor, Hodor. Hodor. Hodor... \n\nHodor, Hodor, Hodor, Hodor. Hodor... Hodor, Hodor. Hodor, Hodor, Hodor. Hodor, Hodor, Hodor. Hodor, Hodor, Hodor, Hodor. Hodor, Hodor, Hodor, Hodor. Hodor. Hodor... Hodor, Hodor, Hodor, Hodor. Hodor! Hodor, Hodor. Hodor, Hodor, Hodor, Hodor. Hodor, Hodor. Hodor! Hodor, Hodor. Hodor... Hodor... Hodor... Hodor."
  },
  {
    id: 6,
    title: "Notes! Notes! Notes!",
    content: "#### High Valyrian?\n\nNuhor lir gurenna. Bantis zobrie issa se ossyngnoti ledys. Nuhor lir gurenna. Hen syndrorro, onos. Hen nuqir, perzys. Hen morghot, glaeson. Toli rhuqo lotinti, kostilus. Hen syndrorro, onos. Hen nuqir, perzys. Hen morghot, glaeson. Ao ynoma diniluks? Skoros morghot vestri? Valar morghulis. Hen syndrorro, onos. Hen nuqir, perzys. Hen morghot, glaeson. \n\nHen syndrorro, onos. Hen nuqir, perzys. Hen morghot, glaeson. Zyhys perzys stepagon Aeksio Ono jorepi, se morghultas lys qelitsos sikagon. Skoros morghot vestri? Toli rhuqo lotinti, kostilus. Daoruni gimi, Ionos Sonaro. Toli rhuqo lotinti, kostilus. Skoros morghot vestri? Bantis zobrie issa se ossyngnoti ledys. Vilibazmosa iderenni emilun. Vilibazmosa iderenni emilun. Zyhys onoso jehikagon Aeksiot epi, se gis hen syndrorro jemagon. Nuhor lir gurenna. Bantis zobrie issa se ossyngnoti ledys. Tubi daor. Skoros morghot vestri?"
  },
  {
    id: 7,
    title: "My GOT Note",
    content: "Bastards are born of passion, aren't they? We don't despise them in Dorne. It is rare to meet a Lannister who shares my enthusiasm for dead Lannisters. The North remembers. A Lannister always pays his debts. \n\nHouse Tarly of Horn Hill Forgive my manners. I don't see many ladies these days. Lucky for the ladies. Dunc the Lunk, thick as a castle wall. Bastards are born of passion, aren't they? We don't despise them in Dorne. I would like a trial by combat. The wolf and the lion. A storm of swords. \n\nI would like a trial by combat. You know nothing, Jon Snow. House Tarly of Horn Hill A dance of dragons. I would like a trial by combat. More pigeon pie, please. Bastards are born of passion, aren't they? We don't despise them in Dorne. More pigeon pie, please. The winds of Winter. The rains of castamere. Fire and blood. A dream of Spring. A dream of Spring. You know nothing, Jon Snow."
  },
  {
    id: 8,
    title: "React Note",
    content: "#### Importing:\n___\n```javascript\nimport React from 'react';\n```\nThat's how you import react into your component."
  },
  {
    id: 9,
    title: "Redux Note",
    content: "*The DUUUUCKS*\n\nRedux redux redux. Redux redux. Redux redux redux redux redux. REEEEDUUUUUUX!\n\nRedux."
  },
];

app.use(bodyParser.json());

app.use(cors());

app.get('/notes', (req, res) => {
  setTimeout(() => {
    res.send(notes);
  }, 1000);
});

app.get('/note/:id', (req, res) => {
  const note = notes.find(f => f.id == req.params.id);

  if (note) {
    res.status(200).json(note);
  } else {
    res.status(404).send({ msg: 'Note not found' });
  }
});

app.post('/notes', (req, res) => {
  const note = { id: getNextId(), ...req.body };

  notes = [...notes, note];

  res.send(notes);
});

app.put('/note/:id', (req, res) => {
  const { id } = req.params;

  const noteIndex = notes.findIndex(f => f.id == id);

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

app.delete('/note/:id', (req, res) => {
  const { id } = req.params;

  notes = notes.filter(f => f.id !== Number(id));

  res.send(notes);
});

function getNextId() {
  return nextId++;
}

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
