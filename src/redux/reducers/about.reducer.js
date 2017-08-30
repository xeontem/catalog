import Immutable from 'immutable';


import img1 from '../../slider/img1.jpg';
import img2 from '../../slider/img2.jpg';
import img3 from '../../slider/img3.jpg';
import img4 from '../../slider/img4.jpg';

import { DATA } from '../../Data/product';
import { CONST } from '../../Data/constants';
// import randomText from '../../services/randomText';

// randomText().then(obj => obj.text_out)

let state = {
  mobile: CONST.mobile,
  sliderImages: [img1, img2, img3, img4],
  imageIndex: 0,
  imgSrc: img1,
  works: DATA.works,
  over: DATA.overSlider
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
