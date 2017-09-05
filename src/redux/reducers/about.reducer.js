import Immutable from 'immutable';

import { ABOUT_SLIDER } from '../../Data/about.slider/about.slider';
import { CONST } from '../../Data/constants';
import { PORTFOLIO } from '../../Data/portfolio/portfolio';
// import randomText from '../../services/randomText';

// randomText().then(obj => obj.text_out)

let state = {
  mobile: CONST.mobile,
  sliderImages: ABOUT_SLIDER.images,
  imageIndex: 0,
  imgSrc: ABOUT_SLIDER.images[0],
  PORTFOLIO,
  slider_info: ABOUT_SLIDER.slider_info
}

const initialState = Immutable.Map(state);

export default function AboutReducer(state = initialState, action) {
  switch(action.type){
  	case "NEXT_IMAGE": {
      let imageIndex = state.get('imageIndex') + 1;
      if(imageIndex > state.get('sliderImages').length - 1) imageIndex = 0;
      let imgSrc = state.get('sliderImages')[imageIndex];
  		let newState = state.set('imgSrc', imgSrc).set('imageIndex', imageIndex);
    	return newState;
    }
    default: return state;
  }
}
