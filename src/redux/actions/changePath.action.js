import { CHANGE_PATH } from '../reducers/app.reducer';
 
export function changePath(path) {
	return function(dispatch) {
		return dispatch({type: CHANGE_PATH, payload: path});
	}
}