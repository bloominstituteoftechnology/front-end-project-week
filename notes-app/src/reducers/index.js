import {DELETE_NOTE } from '../actions'

const initialState = [
    {
    _id: '12345',
    title: "first note",
    textBody: "Every day is taco ipsum tuesday. Shrimp tacos are tasty tacos! Make it a double there pal. If you were a taco, would you eat yourself? TACOS!! Josh’s taco shack is the best taco shack. Um, Tabasco? No thanks, do you have any Cholula? Tacos al pastor made with adobada meat. Black or pinto beans? Um, Tabasco? No thanks, do you have any Cholula? TACOS!! I’ve been following that taco truck around all day. Carne asada on corn tortillas. How do you feel about hard shelled tacos?",
    },
    {
    _id: '23456',
    title: "second note",
    textBody: "Carne asada on corn tortillas. I’d have to say, those tacos are on fleek. Fish tacos: lettuce or cabbage, pico de gallo, avocado and a sour cream or citrus/mayonnaise sauce, all placed on top of a corn or flour tortilla. Side of rice and beans, please. Tacos Al pastor/De Adobada are made of thin pork steaks seasoned with adobo seasoning, then skewered and overlapped on one another on a vertical rotisserie cooked and flame-broiled as it spins. Um, Tabasco? No thanks, do you have any Cholula? These tacos are lit 🔥. Tacos, tacos, tacos. CARNE ASADA!! How do you feel about hard shelled tacos?",
    },
    {
    _id: '34567',
    title: "third note",
    textBody: "Tacos Al pastor/De Adobada are made of thin pork steaks seasoned with adobo seasoning, then skewered and overlapped on one another on a vertical rotisserie cooked and flame-broiled as it spins. Side of rice and beans, please. Burritos are very tasty. Tacos al pastor made with adobada meat. Fish tacos with cabbage slaw and a side of chips and guac. Pico de gallo, on the side please. Give me all the tacos, immediately. Tacos al pastor made with adobada meat. Give me all the tacos, immediately.",
    }
];



const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_NOTE:
            let temp = Array.from(state);
            state.forEach((item, index) => {
                if (item._id === action.payload) {
                    temp.splice(index, 1);
                    return;
                }
            });
            return temp;
        default:
            return temp;
    }
}

export default notesReducer;