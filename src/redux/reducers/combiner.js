import { combineReducers } from 'redux';
import AboutReducer from './about.reducer';
import ProductReducer from './product.reducer';

export default combineReducers({
    AboutReducer, ProductReducer
});
