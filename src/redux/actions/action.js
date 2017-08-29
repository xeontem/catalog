
export function getToasts() {
    return function(dispatch) {
        dispatch({type: "GET"});
    };
}
// export function prevMonth() {
//     return function(dispatch) {
//         dispatch({type: 'SET_PREV'});
//     };
// }
