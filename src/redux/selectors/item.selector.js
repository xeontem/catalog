import R from 'ramda';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Item from '../../components/Item/Item.component';

// import randomImage from '../../services/randomImage';
// import { toggleDialog } from '../actions/toggleDialog.action';
import { toggleCatalogContent } from '../actions/toggleCatalogContent.action';
import { changePath } from '../actions/changePath.action';

// const img = randomImage({ width: 600, height: 337, section: 'technics' });
// const avat = randomImage();

function mapStateToProps(state) {
  return { 
  	mobile: R.view(R.lensProp('mobile'), state.AboutReducer),
  }
}

function mapActionsToProps(dispatch) {
    return {
        pressDetailed: bindActionCreators(toggleCatalogContent, dispatch),// see ExtendedInfoCardReducer
		changePath: bindActionCreators(changePath, dispatch),
    };
}

export default connect(mapStateToProps, mapActionsToProps)(Item);