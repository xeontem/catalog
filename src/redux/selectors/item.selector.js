import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Item from '../../components/Item/Item';

import randomImage from '../../services/randomImage';

function mapStateToProps(state) {
  return { 
  	mobile: state.ExtendedInfoCardReducer.get('mobile'),
  	imgSRC: randomImage({ width: 600, height: 337, section: 'technics' }),
    avatSRC: randomImage()
  }
}

function mapActionsToProps(dispatch) {
    return {
        pressDetailed: (e, item, section) => dispatch({type: "TOGGLE_DIALOG", payload: {e, item, section}}) // see ExtendedInfoCardReducer
    };
}

export default connect(mapStateToProps, mapActionsToProps)(Item);