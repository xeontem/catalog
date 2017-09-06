import Immutable from 'immutable';

import { CONST } from '../../Data/constants';
// import randomText from '../../services/randomText';

// randomText().then(obj => obj.text_out)

let state = {
  visible: false,
  pageX: null,
  pageY: null,
  card_data: {label: '', label_item: '', content: ''}
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
        .set('card_data', {
          label: action.payload.label,
          label_extended: action.payload.label_extended,
          content: action.payload.content
        })
        .set('visible', !state.get('visible'))
        .set('pageX', pageX)
        .set('pageY', pageY)
      return newState;
    }
    default: return state;
  }
}