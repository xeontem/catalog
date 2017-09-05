import Immutable from 'immutable';

import { CONST } from '../../Data/constants';
import { CATALOG_PRODUCTS } from '../../Data/catalog_products/catalog.products';

let state = {
  
  CATALOG_PRODUCTS
  
}

const initialState = Immutable.Map(state);

export default function CatalogReducer(state = initialState, action) {
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
