export function toggleDialog(e, item, section) {
	return function(dispatch) {
		return dispatch({type: "TOGGLE_DIALOG", payload: {e, item, section}});
	}
}