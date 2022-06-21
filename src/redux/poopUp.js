const OPEN_CLOSE_POOP_UP = 'OPEN_POOP_UP';
const CHANGE_ELEMENT = 'CHANGE_ELEMENT';

const initialStore = {
	element: 'null',
	isOpen: false,
};

export const poopUp = (store = initialStore, action) => {
	switch (action.type) {
		case OPEN_CLOSE_POOP_UP:
			return { ...store, isOpen: !store.isOpen };
		case CHANGE_ELEMENT:
			if (action.element && action.element === store.element) return { ...store };

			return { ...store, element: action.element };

		default:
			return store;
	}
};

//AC
const open_close_poopUp = () => {
	return {
		type: OPEN_CLOSE_POOP_UP,
	};
};
const chanageElement = (element = null) => {
	return {
		type: CHANGE_ELEMENT,
		element,
	};
};

//thunk
export const open_closePoopUp = element => dispatch => {
	dispatch(open_close_poopUp());
	dispatch(chanageElement(element));
};
