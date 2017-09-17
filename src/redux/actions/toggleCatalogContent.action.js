export function toggleCatalogContent(e, data) {
	return function(dispatch) {
		return dispatch({type: "TOGGLE_CATALOG_CONTENT", payload: {
			label: data.label,
			content: data.content
		}});
	}
}