import Immutable from 'immutable';

import { CONST } from '../../Data/constants';
import { CATALOG_PRODUCTS } from '../../Data/catalog_products/catalog.products';

let state = {
  visible: false,
  pageX: null,
  pageY: null,
  card_data: {label: CATALOG_PRODUCTS[0].label, content: CATALOG_PRODUCTS[0].descrExtended}
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
          label: action.payload.label || CATALOG_PRODUCTS[0].label,
          content: action.payload.content || CATALOG_PRODUCTS[0].descrExtended})
        .set('visible', action.payload.visible)
        .set('pageX', pageX)
        .set('pageY', pageY);
      return newState;
    }
    default: return state;
  }
}