import Immutable from 'immutable';

import { DATA } from '../../Data/product';
import { CONST } from '../../Data/constants';
// import randomText from '../../services/randomText';

// randomText().then(obj => obj.text_out)

let state = {
  mobile: CONST.mobile,
  visible: false,
  pageX: null,
  pageY: null,
  contextForCard: [{}, {label: ''}]
}

const initialState = Immutable.Map(state);

export default function ExtendedInfoCardReducer(state = initialState, action) {
  switch(action.type){
    case "TOGGLE_DIALOG": {
      let { pageX, pageY } = action.payload.e;
      if (action.payload.e.changedTouches) {
        const [touch] = action.payload.e.changedTouches;
        pageX = touch.pageX;
        pageY = touch.pageY;
      }
      let newState = state
        //                     [navPositions.parent,  navPositions.children]
        .set('contextForCard', [action.payload.section, action.payload.item])
        .set('visible', !state.get('visible'))
        .set('pageX', pageX)
        .set('pageY', pageY)
      return newState;
    }
    default: return state;
  }
}