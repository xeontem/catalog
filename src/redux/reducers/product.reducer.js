import Immutable from 'immutable';

import { CONST } from '../../Data/constants';
import { navPositions } from '../../Data/navPositions';

let state = {
  
  navPositions,
  
}

const initialState = Immutable.Map(state);

export default function ProductReducer(state = initialState, action) {
  switch(action.type){
  	case "NOTHING": {
     //  let { pageX, pageY } = action.payload.e;
     //  if (action.payload.changedTouches) {
     //    const [touch] = action.payload.e.changedTouches;
     //    pageX = touch.pageX;
     //    pageY = touch.pageY;
     //  }
     //  let newState = state
     //    .set('contextForCard', [action.payload.section, action.payload.item])
     //    .set('visible', !state.get('visible'))
     //    .set('pageX', pageX)
     //    .set('pageY', pageY)
    	// return newState;
    }
    default: return state;
  }
}
