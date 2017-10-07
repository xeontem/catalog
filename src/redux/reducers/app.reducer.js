import R from 'ramda';

export const CHANGE_PATH = 'CHANGE_PATH';

const initialState = {
  path: '/about',
  prevPath: ''
}

export function AppReducer(state = initialState, action) {
  switch(action.type){
  	case CHANGE_PATH: {
      const newState = R.set(R.lensProp('prevPath'), state.path, state);
      const newState2 = R.set(R.lensProp('path'), action.payload, newState);
      return newState2; 
    }
    default: return state;
  }
}
