
const ITEM_NAME = `state`;

export const loadState = () => {
    try{
        const serializedState = localStorage.getItem(ITEM_NAME);
        // this allows the reducers to initialize state
        if(serializedState === null){
            return undefined;
        }
        return JSON.parse(serializedState); // return the state
    }catch(err){
        return undefined; // reducers handle the init
    }
};

export const saveState = (state) => {
    try{
        const serializedState = JSON.stringify(state);
        localStorage.setItem(ITEM_NAME, serializedState);
    }catch(err){
        //log the errors somewhere
    }
};