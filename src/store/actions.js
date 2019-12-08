export const ITEMS_SUCCESS = "ITEMS_SUCCESS";
export const ITEMS_REQUEST = "ITEMS_REQUEST";
export const ITEMS_FAILURE = "ITEMS_FAILURE";
export const ITEM_ADDED = "ITEM_ADDED";
export const ITEM_REMOVED = "ITEM_REMOVED";
 
export const getItems = () => (dispatch, getState) => {

	if(getState().items.length > 0) return null;
  
	dispatch(itemsRequest());
	return fetch("/api/v1/items")
	.then(res => {
		return res.json();
	})
	.then(items => {
	dispatch(itemsSuccess(items));
	})
	.catch(err => {
		console.log(err);
		dispatch(itemsFailure());
	});
  };
  
  
  export const itemsSuccess = (items) => ({
	type: ITEMS_SUCCESS,
	payload: items,
  });
  
  export const itemsRequest = () => ({
	type: ITEMS_REQUEST,
  });
  
  export const itemsFailure = () => ({
	type: ITEMS_FAILURE,
  });
  
  
  export const addItem = (item) => ({
	type: ITEM_ADDED,
	payload: item,
  });
  
  export const removeItem = (_id) => ({
	type: ITEM_REMOVED,
	payload: _id,
  });
  
  