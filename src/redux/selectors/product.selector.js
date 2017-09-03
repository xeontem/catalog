import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Product from '../../components/Product/Product.component';
import { toggleDialog } from '../actions/toggleDialog.action';

function mapStateToProps(state) {
  return { 
  	mobile: state.ExtendedInfoCardReducer.get('mobile'),
  	navPositions: state.ProductReducer.get('navPositions'),
  }
}

function mapActionsToProps(dispatch) {
  return {
    toggleDialog: bindActionCreators(toggleDialog, dispatch)// see ExtendedInfoCardReducer
	};
}

export default connect(mapStateToProps, mapActionsToProps)(Product);