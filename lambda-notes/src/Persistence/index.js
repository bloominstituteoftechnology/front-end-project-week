export const localState = () => {
    try {
        const local = localStorage.getItem('notes');
        if (local === null) return;
        return JSON.parse(local);
    }
    catch (err) {
        console.log('error loading',err)
        return;
    }
};

export const saveState = (state) => {
    try {
        const local = JSON.stringify(state);
        localStorage.setItem('notes', local);
    }
    catch (err) {
        console.error(err);
    }
}