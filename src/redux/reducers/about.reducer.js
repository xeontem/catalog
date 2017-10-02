import R from 'ramda';
import { ABOUT_SLIDER } from '../../Data/about.slider/about.slider';
import { CONST } from '../../Data/constants';
import { PORTFOLIO } from '../../Data/portfolio/portfolio';
// import randomText from '../../services/randomText';

// randomText().then(obj => obj.text_out)

let initialState = {
  mobile: CONST.mobile,
  sliderImages: ABOUT_SLIDER.images,
  imageIndex: 0,
  imgSrc: ABOUT_SLIDER.images[0],
  PORTFOLIO,
  slider_info: ABOUT_SLIDER.slider_info
}

// const initialState = Immutable.Map(state);

// const perf = f => {
//   const start = performance.now();
//   f
// }

export default function AboutReducer(state = initialState, action) {
  switch(action.type){
  	case "NEXT_IMAGE": {
    //   let imageIndex = state.get('imageIndex') + 1;
    //   if(imageIndex > state.get('sliderImages').length - 1) imageIndex = 0;
    //   let imgSrc = state.get('sliderImages')[imageIndex];
  		// let newState = state.set('imgSrc', imgSrc).set('imageIndex', imageIndex);
    // 	return newState;
    //------------------------------------------------------------
      let imageIndex = R.view(R.lensProp('imageIndex'), state) + 1;
      if(imageIndex > R.view(R.lensProp('sliderImages'), state).length - 1) imageIndex = 0;
      let imgSrc = R.view(R.lensProp('sliderImages'), state)[imageIndex];
      let newState = R.set(R.lensProp('imgSrc'), imgSrc, state);
      let newState2 = R.set(R.lensProp('imageIndex'), imageIndex, newState);
      return newState2; 
    }
    default: return state;
  }
}
