import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import About from '../../components/About/About.component';
import { nextImage } from '../actions/nextImage.action';

function mapStateToProps(state) {
  return { 
  	mobile: state.AboutReducer.get('mobile'),
    slider_info: state.AboutReducer.get('slider_info'),
    sliderImages: state.AboutReducer.get('sliderImages'),
    imageIndex: state.AboutReducer.get('imageIndex'),
    imgSrc: state.AboutReducer.get('imgSrc'),
    PORTFOLIO: state.AboutReducer.get('PORTFOLIO') 
  }
}

function mapActionsToProps(dispatch) {
    return {
        nextImg: bindActionCreators(nextImage, dispatch)
    };
}

export default connect(mapStateToProps, mapActionsToProps)(About);