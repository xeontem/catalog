import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Works from '../../components/Works/Works.component';
import { toggleDialog } from '../actions/toggleDialog.action';

function mapStateToProps(state) {
  return { 
  	mobile: state.ExtendedInfoCardReducer.get('mobile')
  }
}

function mapActionsToProps(dispatch) {
    return {
        saveButtonHandler: bindActionCreators(toggleDialog, dispatch)// see ExtendedInfoCardReducer
    };
}

export default connect(mapStateToProps, mapActionsToProps)(Works);