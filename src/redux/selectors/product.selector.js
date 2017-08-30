import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Product from '../../components/Product/Product';

function mapStateToProps(state) {
  return { 
    // over: state.HomeReducer.get('over'),
    // sliderImages: state.HomeReducer.get('sliderImages'),
    // imageIndex: state.HomeReducer.get('imageIndex'),
    // imgSrc: state.HomeReducer.get('imgSrc')
  }
}

function mapActionsToProps(dispatch) {
    return {
        // nextImg: () => dispatch({type: "NEXT_IMAGE"})
    };
}

export default connect(mapStateToProps, mapActionsToProps)(Product);