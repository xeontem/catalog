import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Works from '../../components/Works/Works';

function mapStateToProps(state) {
  return { 
  	mobile: state.ExtendedInfoCardReducer.get('mobile')
  }
}

function mapActionsToProps(dispatch) {
    return {
        saveButtonHandler: (e, item, section) => dispatch({type: "TOGGLE_DIALOG", payload: {e, item, section}}) // see ExtendedInfoCardReducer
    };
}

export default connect(mapStateToProps, mapActionsToProps)(Works);