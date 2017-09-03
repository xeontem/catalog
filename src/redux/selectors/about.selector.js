import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import About from '../../components/About/About.component';
import { nextImage } from '../actions/nextImage.action';

function mapStateToProps(state) {
  return { 
  	mobile: state.ExtendedInfoCardReducer.get('mobile'),
    over: state.AboutReducer.get('over'),
    sliderImages: state.AboutReducer.get('sliderImages'),
    imageIndex: state.AboutReducer.get('imageIndex'),
    imgSrc: state.AboutReducer.get('imgSrc'),
    works: state.AboutReducer.get('works') 
  }
}

function mapActionsToProps(dispatch) {
    return {
        nextImg: bindActionCreators(nextImage, dispatch)
    };
}

export default connect(mapStateToProps, mapActionsToProps)(About);