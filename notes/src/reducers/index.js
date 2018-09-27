import {ADDING, VIEWING, HOME, EDITING, UPDATING, DELETING, ERROR} from '../actions';

const initialState = {
    notes: [
        {title: 'Costco', content: 'Costco Wholesale Corporation, trading as Costco, is an American multinational corporation which operates a chain of membership-only warehouse clubs.'},
        {title: 'Bath & Body Works', content:"An American retailer under the L Brands umbrella, along with Victoria's Secret. It was founded in 1990 in New Albany, Ohio and has since expanded across the United States, Canada, Chile and Peru. In 1997, it was the largest bath shop chain in the United States."},
        {title: 'Migos', content:'Migos is an American hip hop trio from Lawrenceville, Georgia, founded in 2008. They are composed of three rappers known by their stage names Takeoff, Quavo and Offset.'},
        {title: 'Seentos', content:'Seentos is a Vietnamese hip hop trio from San Diego, California, founded in 2018. They are composed of three bad boys known by their stage names Coach K, Seent It Guy, and Side Piece. Rumors have been circling that their next single, Seent It Boys, is to be released 6 October.'}
    ],
    adding: false,
    viewing: false,
    editing: false,
    index: -1,
    updating: false,
    error: null
}

const reducer = (state=initialState, action) =>{
    switch(action.type){
        case ADDING:
            return{
                ...state,
                notes: state.notes.concat(action.payload)
            }
        case VIEWING:
            return{
                ...state,
                viewing: true,
                editing: false,
                index: action.payload
            }
        case HOME:
            return{
                ...state,
                viewing: false,
                editing: true,
                index: -1,
            }
        case EDITING:
            return{
                ...state,
                viewing: false,
                editing: true,
                index: action.payload
            }
        case UPDATING:
            return{
                ...state,
                editing: false,
                notes: action.payload,
                index: -1,
            }
        case DELETING:
            return{
                ...state,
                viewing: false,
                notes: action.payload
            }
        case ERROR:
            return{
                ...state
            }
        default:
            return state;
    }
}

export default reducer;