import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import About from '../../components/About/About';

function mapStateToProps(state) {
  return { 
  	works: state.AboutReducer.get('works'), 
  	mobile: state.AboutReducer.get('mobile'),
    over: state.AboutReducer.get('over'),
    sliderImages: state.AboutReducer.get('sliderImages'),
    imageIndex: state.AboutReducer.get('imageIndex'),
    imgSrc: state.AboutReducer.get('imgSrc')
  }
}

function mapActionsToProps(dispatch) {
    return {
        nextImg: () => dispatch({type: "NEXT_IMAGE"})
    };
}

export default connect(mapStateToProps, mapActionsToProps)(About);