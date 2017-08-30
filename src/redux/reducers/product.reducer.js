import Immutable from 'immutable';
import img1 from '../../slider/img1.jpg';
import img2 from '../../slider/img2.jpg';
import img3 from '../../slider/img3.jpg';
import img4 from '../../slider/img4.jpg';

import { CONST } from '../../Data/constants';
import { navPositions } from '../../Data/navPositions';

let state = {
  mobile: CONST.mobile,
  visible: false,
  pageX: null,
  pageY: null,
  navPositions,
  contextForCard: []
}

const initialState = Immutable.Map(state);

export default function HomeReducer(state = initialState, action) {
  switch(action.type){
  	case "TOGGLE_DIALOG": {
      let { pageX, pageY } = action.payload.e;
      if (action.payload.changedTouches) {
        const [touch] = action.payload.e.changedTouches;
        pageX = touch.pageX;
        pageY = touch.pageY;
      }
      let newState = state
        .set('contextForCard', [action.payload.section, action.payload.item])
        .set('visible', !state.get('visible'))
        .set('pageX', pageX)
        .set('pageY', pageY)
    	return newState;
    }
    default: return state;
  }
}
