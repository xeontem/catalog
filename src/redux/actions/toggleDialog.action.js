export function toggleDialog(e, data) {
	return function(dispatch) {
		console.log(data);
		return dispatch({type: "TOGGLE_DIALOG", payload: {
			e,
			label: data.label,
			label_extended: data.label_extended,
			content: data.content,
			visible: data.visible || false}
		});
	}
}