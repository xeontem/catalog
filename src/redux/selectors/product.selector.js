import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Product from '../../components/Product/Product';

function mapStateToProps(state) {
  return { 
  	mobile: state.ExtendedInfoCardReducer.get('mobile'),
  	navPositions: state.ProductReducer.get('navPositions'),
  }
}

function mapActionsToProps(dispatch) {
  return {
    toggleDialog: (e, item, section) => dispatch({type: "TOGGLE_DIALOG", payload: {e, item, section}}) // see ExtendedInfoCardReducer
  };
}

export default connect(mapStateToProps, mapActionsToProps)(Product);