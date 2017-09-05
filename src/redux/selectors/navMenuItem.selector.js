import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import NavMenuItem from '../../components/navMenuItem/navMenuItem.component';
import { toggleDialog } from '../actions/toggleDialog.action';

function mapStateToProps(state) {
  return { 
  	mobile: state.AboutReducer.get('mobile')
  }
}

function mapActionsToProps(dispatch) {
    return {
        openDialog: bindActionCreators(toggleDialog, dispatch)// see ExtendedInfoCardReducer
    };
}

export default connect(mapStateToProps, mapActionsToProps)(NavMenuItem);