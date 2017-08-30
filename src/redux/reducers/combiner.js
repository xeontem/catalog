import { combineReducers } from 'redux';
import AboutReducer from './about.reducer';
import CatalogReducer from './catalog.reducer';

export default combineReducers({
    AboutReducer, CatalogReducer
});
