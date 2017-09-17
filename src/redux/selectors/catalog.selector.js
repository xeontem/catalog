import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Catalog from '../../components/Catalog/Catalog.component';
import { toggleCatalogContent } from '../actions/toggleCatalogContent.action';

function mapStateToProps(state) {
  return { 
  	mobile: state.AboutReducer.get('mobile'),
  	CATALOG_PRODUCTS: state.CatalogReducer.get('CATALOG_PRODUCTS'),
  	card_data: state.ExtendedInfoCardReducer.get('card_data'),
  	label: state.CatalogReducer.get('label'),
  	content: state.CatalogReducer.get('content')
  }
}

function mapActionsToProps(dispatch) {
  return {
    pressBack: bindActionCreators(toggleCatalogContent, dispatch)// see ExtendedInfoCardReducer
	};
}

export default connect(mapStateToProps, mapActionsToProps)(Catalog);