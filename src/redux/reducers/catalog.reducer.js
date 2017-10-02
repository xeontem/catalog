import R from 'ramda';
import React, { Component, PropTypes } from 'react';
// import Immutable from 'immutable';

import { CONST } from '../../Data/constants';
import { CATALOG_PRODUCTS } from '../../Data/catalog_products/catalog.products';

import Item from '../../redux/selectors/item.selector';


let initialState = {
  
  CATALOG_PRODUCTS,
  content: CATALOG_PRODUCTS.map((item, i) => <Item key={'card' + i} item={item}/>),
  label: 'Каталог продукции'
}

// const initialState = Immutable.Map(state);

export default function CatalogReducer(state = initialState, action) {
  switch(action.type){
  	case "TOGGLE_CATALOG_CONTENT": {
     //  let newState = state
     //    .set('content', action.payload.content || CATALOG_PRODUCTS.map((item, i) => <Item key={'card' + i} item={item}/>))
     //    .set('label',  action.payload.label || 'Каталог продукции')
    	// return newState;
      //------------------------------------------------
      let newState = R.set(R.lensProp('content'), action.payload.content || CATALOG_PRODUCTS.map((item, i) => <Item key={`card${i}`} item={item}/>), state);
      newState = R.set(R.lensProp('label'), action.payload.label || 'Каталог продукции', newState);
      return newState;
    }
    default: return state;
  }
}
