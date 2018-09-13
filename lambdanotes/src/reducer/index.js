import { DELETE_NOTE, EDIT_NOTE, CREATE_NOTE } from '../Actions';




const initialState = [
    {
        _id: 'ddldldldl292844',
        title: 'Tabby Cats',
        body: 'Birman. Tom kitty but american bobtail or tiger mouser so thai havana brown. Norwegian forest puma but tomcat but manx ocelot. Devonshire rex. Munchkin leopard scottish fold cornish rex. Manx thai but lion, for russian blue. Cheetah. Bobcat. Donskoy siamese. Jaguar egyptian mau thai.Jaguar thai manx tomcat thai bengal himalayan. Puma puma but munchkin cheetah cheetah tiger. Munchkin kitten. Siamese thai, so leopard and siberian scottish fold bengal. Maine coon donskoy lynx. Ocicat tom ocicat but tabby yet jaguar leopard, mouser.  ',   
    },
    {
        _id: 'ffifikepepep9594847',
        title: 'Siamese Cats',
        body: 'Scottish fold russian blue maine coon for munchkin or scottish fold, scottish fold yet egyptian mau, or havana brown. Norwegian forest himalayan. Tabby leopard munchkin. Donskoy. Siberian. Persian. Birman. Havana brown. Ocelot siamese turkish angora maine coon scottish fold. Cougar panther. Manx. Munchkin himalayan, mouser. Manx persian. Burmese havana brown for russian blue or malkin. Jaguar. Siberian american bobtail and abyssinian , kitten leopard but jaguar. Donskoy singapura, or bombay ocelot savannah cheetah savannah. Leopard ragdoll ragdoll leopard but british shorthair. Ocicat. Kitty ocelot but persian and munchkin jaguar for cornish rex thai. Lion sphynx tabby.',
      
    },
    {
        _id: 'kdihroekgjt9485768303',
        title: 'British ShortHair Cats',
        body: 'Ocelot. Savannah tomcat malkin persian, so norwegian forest cougar. Siberian malkin himalayan yet bengal for sphynx, bobcat. British shorthair ocicat, but tabby for devonshire rex but tom or ocelot american bobtail. Mouser lynx burmese or cougar. Havana brown thai ocicat yet norwegian forest maine coon manx cheetah. Lion thai munchkin or siamese munchkin. Tomcat panther so bombay balinese egyptian mau. Scottish fold ocelot, or singapura scottish fold yet ragdoll but birman. Malkin leopard malkin. American shorthair cheetah. Tom savannah for maine coon yet british shorthair bobcat but scottish fold or bombay. Russian blue. Malkin mouser and scottish fold for egyptian mau.',
        
    },
    {
        _id: 'jddjpgrujjnho96787567',
        title: 'Scottish Fold Cats',
        body: 'Sphynx sphynx. British shorthair sphynx. Lynx egyptian mau or tabby and birman but british shorthair bobcat balinese . Cornish rex bombay but norwegian forest so munchkin for ragdoll, donskoy. Himalayan ocicat manx yet tabby, devonshire rex siberian. British shorthair havana brown american bobtail american bobtail ragdoll, yet maine coon burmese. Bombay bobcat. Grimalkin cougar and devonshire rex for tom. American bobtail abyssinian donskoy himalayan for himalayan devonshire rex havana brown. Puma munchkin ocelot. Ocelot norwegian forest. Ocelot siberian yet norwegian forest but turkish angora or bengal. Cornish rex ragdoll or manx for british shorthair, siberian yet jaguar balinese . Lynx american bobtail for himalayan ocelot turkish angora but sphynx but leopard. Himalayan manx turkish angora tom. Scottish fold. Sphynx. Kitten kitten and egyptian mau mouser. ',
        
    },
        {
        _id: 'dhugfgdeidjghor6784847947',
        title: 'Russian Blue Cats',
        body: 'Malkin himalayan. Singapura kitty panther so donskoy so havana brown devonshire rex. Thai panther siamese kitty. Lion ocicat persian yet american shorthair but lion russian blue so tabby. Bengal british shorthair. Cornish rex maine coon. Cheetah birman yet leopard thai tabby. Puma siamese but cornish rex, siberian manx malkin, and tom. ',
        
    },
    {
        _id: 'judjdkdfihgirprie8967844075978',
        title: 'Spynx Cats',
        body: 'Lion singapura and himalayan lion and havana brown savannah. Lion havana brown bombay, siberian. Russian blue singapura but russian blue. Tomcat ocicat but panther but manx. Ocicat persian. Tom jaguar burmese, for american shorthair and jaguar. American bobtail savannah for donskoy, havana brown for siberian so maine coon. Grimalkin. Puma puma. Grimalkin. Munchkin burmese lynx for egyptian mau, balinese and malkin so norwegian forest. Donskoy bengal for kitten for siberian. Cornish rex burmese so cheetah. Birman burmese. Puma cougar or abyssinian for panther and savannah siamese. Lion manx lion yet russian blue. Burmese tomcat or siamese for persian yet sphynx lion kitty. Havana brown singapura. Grimalkin turkish angora but munchkin. Tomcat havana brown or norwegian forest, for abyssinian for maine coon.',
        
    },
    {
        _id: 'hjdujdkudiogiuro9089485859340386',
        title: 'Persian Cats',
        body: 'Turkish angora scottish fold cougar mouser so kitten. Ocicat balinese or british shorthair ocicat so malkin. Cornish rex lion ocelot yet ragdoll. Turkish angora. Ocelot lion cheetah yet scottish fold tiger yet leopard donskoy. Tomcat. Himalayan kitten, tabby thai so kitty for lynx lynx. Bengal grimalkin. Siamese devonshire rex and munchkin. Savannah tabby or tabby yet ragdoll lynx for british shorthair but kitty. ',
        
    },

];


//temp is working with a "temporary" copy of the copy of the notes notes array that you make changes to, and then display. 
//The Array.from() method creates a new, shallow-copied Array instance from an array-like or object.
const notesReducer = (state = initialState, action) => {
    let temp = Array.from(state);
    switch (action.type) {
        case DELETE_NOTE:
            state.forEach((item, index) => {
                if (item._id === action.payload) {
                    temp.splice(index, 1);
                    return;
                }
            });
            return temp;
        case EDIT_NOTE:
            state.forEach((item, index) => {
                if (item._id === action.payload._id) {
                    temp.splice(index, 1);
                    return;
                }
            });
            temp.push(action.payload);
            return temp;
        case CREATE_NOTE:
            temp.push(action.payload);
            return temp;
        default:
            return state;
    }
}

export default notesReducer;