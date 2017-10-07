import R from 'ramda';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import App from '../../App';
import { changePath } from '../actions/changePath.action';

function mapStateToProps(state) {
  return { 
    path: R.view(R.lensProp('path'), state.AppReducer),
    prevPath: R.view(R.lensProp('prevPath'), state.AppReducer)
  };
}

function mapActionsToProps(dispatch) {
    return {
        changePath: bindActionCreators(changePath, dispatch)
    };
}

export default connect(mapStateToProps, mapActionsToProps)(App);