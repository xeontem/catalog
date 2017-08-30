import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Product from '../../components/Product/Product';

function mapStateToProps(state) {
  return { 
  	mobile: state.ProductReducer.get('mobile'),
  	visible: state.ProductReducer.get('visible'),
  	pageX: state.ProductReducer.get('pageX'),
  	pageY: state.ProductReducer.get('pageY'),
  	navPositions: state.ProductReducer.get('navPositions'),
  	contextForCard: state.ProductReducer.get('contextForCard')
  }
}

function mapActionsToProps(dispatch) {
    return {
        toggleDialog: (e, item, section) => {
	        console.dir(e);
	        console.dir(item);
	        console.dir(section);
	        return	dispatch({type: "TOGGLE_DIALOG", payload: {e, item, section}})
        }
    };
}

export default connect(mapStateToProps, mapActionsToProps)(Product);