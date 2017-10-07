import { combineReducers } from 'redux';
import { AppReducer } from './app.reducer';
import AboutReducer from './about.reducer';
import CatalogReducer from './catalog.reducer';
import ExtendedInfoCardReducer from './extendedInfoCard.reducer';

export default combineReducers({
    AppReducer, AboutReducer, CatalogReducer, ExtendedInfoCardReducer
});
