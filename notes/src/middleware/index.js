export const logger = store => {
	return next => {
		return action => {
			console.group(action.type);
			console.log('Action: ' action);
			console.log('Previous state: : ' store.getState());

			const result = next(action);

			console.log('New state: ' store.getState());
			console.groupEnd();

			return result;
		}
	}
}