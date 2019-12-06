import {createStore} from "redux";

const USER_LOADED = "USER_LOADED";
const initalState = {
	email: null,
	_id: null,
};

const authReducer = (state = initalState ,action) => {
	switch (action.type) {
		case USER_LOADED: {
			return {
				...state,
				...action.payload,
			};
		}
		default:{
			return state;
		}
	}
};

const store = createStore(authReducer);
store.subscribe( () => console.log(store.getState()));


store.dispatch({
	type: USER_LOADED,
	payload: {
		email:"test1@gmail.com",
		_id:2,
	}
});

export default store;