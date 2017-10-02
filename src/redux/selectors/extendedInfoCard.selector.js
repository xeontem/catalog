import R from 'ramda';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ExendedInfoCard from '../../components/ExendedInfoCard/ExendedInfoCard.component';
import { toggleDialog } from '../actions/toggleDialog.action';

function mapStateToProps(state) {
  return { 
  	mobile: R.view(R.lensProp('mobile'), state.AboutReducer),
  	visible: R.view(R.lensProp('visible'), state.ExtendedInfoCardReducer),//state.ExtendedInfoCardReducer.get('visible'),
  	pageX: R.view(R.lensProp('pageX'), state.ExtendedInfoCardReducer),//state.ExtendedInfoCardReducer.get('pageX'),
  	pageY: R.view(R.lensProp('pageY'), state.ExtendedInfoCardReducer),//state.ExtendedInfoCardReducer.get('pageY'),
  	card_data: R.view(R.lensProp('card_data'), state.ExtendedInfoCardReducer),//state.ExtendedInfoCardReducer.get('card_data')
  }
}

function mapActionsToProps(dispatch) {
  return {
    saveButtonHandler: bindActionCreators(toggleDialog, dispatch)// see ExtendedInfoCardReducer
  };
}

export default connect(mapStateToProps, mapActionsToProps)(ExendedInfoCard);