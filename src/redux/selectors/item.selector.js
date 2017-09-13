import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Item from '../../components/Item/Item.component';

import randomImage from '../../services/randomImage';
import { toggleDialog } from '../actions/toggleDialog.action';

// const img = randomImage({ width: 600, height: 337, section: 'technics' });
// const avat = randomImage();

function mapStateToProps(state) {
  return { 
  	mobile: state.AboutReducer.get('mobile'),
  }
}

function mapActionsToProps(dispatch) {
    return {
        pressDetailed: bindActionCreators(toggleDialog, dispatch)// see ExtendedInfoCardReducer
    };
}

export default connect(mapStateToProps, mapActionsToProps)(Item);