import { combineReducers } from 'redux';
import AboutReducer from './about.reducer';
import ProductReducer from './product.reducer';
import ExtendedInfoCardReducer from './extendedInfoCard.reducer';

export default combineReducers({
    AboutReducer, ProductReducer, ExtendedInfoCardReducer
});
