// retrieve data from localStorage
export const loadState = () => {
	try {
		const serializedState = localStorage.getItem("state");
		// nothing in localStorage so let reducers initialize state
		if (serializedState === null) {
			return undefined;
		}
		// convert data from stringified
		return JSON.parse(serializedState);
	} catch (err) {
		// let reducers initialize app when errors occur
		return undefined;
	}
};
// push data to localStorage
export const saveState = state => {
	try {
		const serializedState = JSON.stringify(state);
		// store data under "state" key
		localStorage.setItem("state", serializedState);
	} catch (err) {
		console.log(err);
	}
};
