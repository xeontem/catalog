export function nextImage() {
	return function(dispatch) {
		return dispatch({type: "NEXT_IMAGE"});
	}
}