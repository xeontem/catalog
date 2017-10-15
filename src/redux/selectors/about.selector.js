'use strict';

import R from 'ramda';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import About from '../../components/About/About.component';
import { nextImage } from '../actions/nextImage.action';

const mapStateToProps = state => ({ 
  mobile: R.view(R.lensProp('mobile'), state.AboutReducer),
  sliderInfo: R.view(R.lensProp('sliderInfo'), state.AboutReducer),
  sliderImages: R.view(R.lensProp('sliderImages'), state.AboutReducer),
  imageIndex: R.view(R.lensProp('imageIndex'), state.AboutReducer),
  imgSrc: R.view(R.lensProp('imgSrc'), state.AboutReducer),
  PORTFOLIO: R.view(R.lensProp('PORTFOLIO'), state.AboutReducer),
});

const mapActionsToProps = dispatch => ({ nextImg: bindActionCreators(nextImage, dispatch) });

export default connect(mapStateToProps, mapActionsToProps)(About);