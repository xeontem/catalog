import R from 'ramda';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import About from '../../components/About/About.component';
import { nextImage } from '../actions/nextImage.action';

function mapStateToProps(state) {
  return { 
  	mobile: R.view(R.lensProp('mobile'), state.AboutReducer),
    slider_info: R.view(R.lensProp('slider_info'), state.AboutReducer),//state.AboutReducer.get('slider_info'),
    sliderImages: R.view(R.lensProp('sliderImages'), state.AboutReducer),//state.AboutReducer.get('sliderImages'),
    imageIndex: R.view(R.lensProp('imageIndex'), state.AboutReducer),//state.AboutReducer.get('imageIndex'),
    imgSrc: R.view(R.lensProp('imgSrc'), state.AboutReducer),//state.AboutReducer.get('imgSrc'),
    PORTFOLIO: R.view(R.lensProp('PORTFOLIO'), state.AboutReducer),//state.AboutReducer.get('PORTFOLIO') 
  }
}

function mapActionsToProps(dispatch) {
    return {
        nextImg: bindActionCreators(nextImage, dispatch)
    };
}

export default connect(mapStateToProps, mapActionsToProps)(About);