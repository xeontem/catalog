import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ExendedInfoCard from '../../components/ExendedInfoCard/ExendedInfoCard';

function mapStateToProps(state) {
  return { 
  	mobile: state.ExtendedInfoCardReducer.get('mobile'),
  	visible: state.ExtendedInfoCardReducer.get('visible'),
  	pageX: state.ExtendedInfoCardReducer.get('pageX'),
  	pageY: state.ExtendedInfoCardReducer.get('pageY'),
  	navPositions: state.ProductReducer.get('navPositions'),
  	contextForCard: state.ExtendedInfoCardReducer.get('contextForCard')
  }
}

function mapActionsToProps(dispatch) {
  return {
    saveButtonHandler: (e, item, section) => dispatch({type: "TOGGLE_DIALOG", payload: {e, item, section}}) // see ExtendedInfoCardReducer
  };
}

export default connect(mapStateToProps, mapActionsToProps)(ExendedInfoCard);