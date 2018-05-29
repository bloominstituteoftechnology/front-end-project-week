import { ADD_NOTE, EDIT_NOTE, REMOVE_NOTE } from '../actions';
import { v4 } from 'node-uuid';

let initialState = [
    {
        title: "Hipster Ipsum",
        body: "Lorem ipsum dolor amet trust fund knausgaard raclette hoodie butcher. Forage synth coloring book, next level cold-pressed retro occupy pinterest kinfolk tumeric quinoa ennui wolf tilde. Beard glossier adaptogen ennui chillwave man bun subway tile raclette DIY fanny pack taxidermy raw denim post-ironic. Heirloom quinoa farm-to-table aesthetic tofu cardigan roof party, portland edison bulb offal chicharrones meditation yr woke.",
        id: v4(),
        createdAt: 1527663481979
    },
    {
        title: "Trust Fund",
        body: "Yuccie taxidermy iPhone, readymade XOXO thundercats asymmetrical intelligentsia bushwick gastropub squid. Man braid gastropub brooklyn readymade put a bird on it hexagon. Pok pok kombucha paleo austin viral bitters whatever. Beard stumptown cardigan everyday carry gluten-free disrupt la croix 8-bit viral tilde mumblecore health goth. Williamsburg direct trade shaman glossier. Taxidermy single-origin coffee vape +1. Kinfolk fixie celiac yr, occupy +1 edison bulb taxidermy schlitz ennui adaptogen next level slow-carb la croix asymmetrical.",
        id: v4(),
        createdAt: 1527663481980
    },
    {
        title: "Gluten-Free",
        body: "Pok pok single-origin coffee salvia, beard fanny pack plaid yuccie lomo swag austin tousled slow-carb. Dreamcatcher +1 health goth tote bag humblebrag, poke lo-fi austin whatever synth fingerstache la croix activated charcoal gochujang af. Readymade vice meditation health goth, chicharrones cold-pressed squid. YOLO twee marfa you probably haven't heard of them scenester selfies slow-carb. Small batch tacos tofu unicorn. Taxidermy copper mug photo booth organic.",
        id: v4(),
        createdAt: 1527663481981
    },
    {
        title: "Mindful",
        body: "Tilde post-ironic bushwick meditation, austin tote bag pug +1 craft beer retro actually sartorial. Lo-fi cray raclette, health goth sriracha chillwave tumblr synth palo santo blue bottle cardigan slow-carb affogato lomo hexagon. Ennui blue bottle semiotics, master cleanse synth poutine blog pitchfork organic snackwave helvetica. Dreamcatcher sriracha gentrify, mustache paleo single-origin coffee four loko vice leggings air plant. Venmo paleo cray meh meditation, sriracha yr migas single-origin coffee edison bulb shaman tattooed bespoke franzen viral. Lyft shaman everyday carry selvage yuccie, mustache affogato snackwave craft beer retro. +1 woke kinfolk truffaut subway tile four loko hoodie cred irony distillery.",
        id: v4(),
        createdAt: 1527663481982
    },
    {
        title: "Tattooed Mustache",
        body: "Four loko squid la croix vinyl. Glossier kombucha migas mlkshk retro man braid. Migas echo park polaroid live-edge, marfa tousled butcher iceland ethical deep v four dollar toast organic semiotics slow-carb vice. Roof party scenester swag vegan, humblebrag air plant williamsburg gochujang austin hashtag seitan dreamcatcher. Salvia before they sold out taiyaki paleo PBR&B quinoa fanny pack tousled kale chips sartorial mixtape. Pinterest pabst palo santo, tattooed brooklyn master cleanse vaporware gluten-free.",
        id: v4(),
        createdAt: 1527663481983
    },
    {
        title: "Food Truck",
        body: "Lorem ipsum dolor amet edison bulb authentic synth seitan voluptate sriracha lumbersexual dolore umami reprehenderit jianbing jean shorts paleo etsy. Cred jean shorts selvage succulents, 8-bit knausgaard retro. Truffaut aesthetic tote bag, fingerstache green juice heirloom cardigan keffiyeh 8-bit street art veniam incididunt. Church-key XOXO food truck venmo man bun pok pok pork belly, labore try-hard mumblecore normcore sartorial ennui est. Beard aliqua kogi banjo chia 3 wolf moon fingerstache tofu, green juice tilde. Hexagon street art umami raclette, fingerstache chicharrones organic tote bag ad. Quinoa knausgaard helvetica adaptogen.",
        id: v4(),
        createdAt: 1527663481984
    },
    {
        title: "Jean Shorts",
        body: "Pariatur ennui adaptogen taiyaki est, sartorial unicorn gochujang irony sunt. Irony +1 stumptown pok pok tumeric hammock est man braid mustache woke pitchfork keytar nisi polaroid. Yuccie vexillologist tote bag heirloom vice tumeric, chicharrones normcore beard stumptown swag in kombucha craft beer health goth. Unicorn fam hella schlitz VHS dolore hexagon qui palo santo elit actually fanny pack shabby chic. Eiusmod chambray do tempor ugh raclette deserunt artisan sunt VHS banh mi roof party migas. Voluptate ut trust fund anim cloud bread single-origin coffee keffiyeh do four loko before they sold out pug magna migas.",
        id: v4()
    },
    {
        title: "Craft Beer",
        body: "Narwhal selfies brooklyn church-key. Narwhal tilde bitters shaman. Jean shorts ad hoodie cred culpa consequat franzen, incididunt disrupt chicharrones jianbing. Veniam selfies et brooklyn fingerstache consequat schlitz drinking vinegar tousled post-ironic photo booth skateboard man bun pariatur pug. Occupy vape letterpress dolore vaporware artisan umami, single-origin coffee aliqua proident direct trade organic minim fingerstache thundercats.",
        id: v4(),
        createdAt: 1527663481985
    },
    {
        title: "Cold-Pressed",
        body: "Gentrify elit vexillologist, irony yr blue bottle retro pinterest deserunt poutine. Flannel messenger bag yuccie voluptate lo-fi try-hard literally plaid roof party mustache occupy eu shabby chic. Butcher fashion axe ut air plant paleo. Plaid lorem poutine XOXO trust fund post-ironic four loko paleo gluten-free sriracha cloud bread. Quinoa 8-bit nulla occupy. Edison bulb 90's selfies vexillologist, locavore irony dolore plaid actually. Est flannel street art, sint tempor taxidermy sustainable.",
        id: v4(),
        createdAt: 1527663481986
    }
]


const saveData = (array) => {
    return localStorage.setItem('array', JSON.stringify(array));
}

const retrieveData = () => {
    initialState = JSON.parse(localStorage.getItem('array'));
    //return initialState === null ? [] : initialState;
    return initialState;
}

export default (state = retrieveData(), action) => {
    switch (action.type) {
        case ADD_NOTE:
            const addNoteState = Array.from(state);
            addNoteState.unshift(action.payload);
            saveData(addNoteState);
            return addNoteState;
        case EDIT_NOTE:
            let editNoteState = Array.from(state);
            // console.log('editnotestate: ', editNoteState);
            editNoteState = state.filter((note) => {
                // console.log('action payload id', action.payload.id);
                // console.log("note id: ", note.id)
                return note.id !== action.payload.id;
            })
            editNoteState.unshift(action.payload);
            saveData(editNoteState);
            return editNoteState;
        case REMOVE_NOTE:
            // console.log(typeof action.payload)
            let removeNoteState = Array.from(state);
            // console.log(removeNoteState);
            removeNoteState = removeNoteState.filter(note => {
                // console.log(note)
                return note.id !== action.payload;
            });
            // console.log(removeNoteState)
            saveData(removeNoteState);
            return removeNoteState;
        default:
            return state;
    }
}