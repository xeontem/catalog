import R from 'ramda';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Catalog from '../../components/Catalog/Catalog.component';
import { toggleCatalogContent } from '../actions/toggleCatalogContent.action';

function mapStateToProps(state) {
  return { 
  	// mobile: R.view(R.lensProp('mobile'), state.AboutReducer),
  	// CATALOG_PRODUCTS: R.view(R.lensProp('CATALOG_PRODUCTS'), state.CatalogReducer),//state.CatalogReducer.get('CATALOG_PRODUCTS'),
  	// card_data: R.view(R.lensProp('card_data'), state.ExtendedInfoCardReducer),//state.ExtendedInfoCardReducer.get('card_data'),
  	label: R.view(R.lensProp('label'), state.CatalogReducer),//state.CatalogReducer.get('label'),
  	content: R.view(R.lensProp('content'), state.CatalogReducer),//state.CatalogReducer.get('content')
  }
}

function mapActionsToProps(dispatch) {
  return {
    pressBack: bindActionCreators(toggleCatalogContent, dispatch)// see ExtendedInfoCardReducer
	};
}

export default connect(mapStateToProps, mapActionsToProps)(Catalog);