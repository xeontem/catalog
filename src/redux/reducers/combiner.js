import { combineReducers } from 'redux';
import AboutReducer from './about.reducer';
import CatalogReducer from './catalog.reducer';
import ExtendedInfoCardReducer from './extendedInfoCard.reducer';

export default combineReducers({
    AboutReducer, CatalogReducer, ExtendedInfoCardReducer
});
