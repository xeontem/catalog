'use strict';

import R from 'ramda';
import { ABOUT_SLIDER } from '../../Data/about.slider/about.slider';
import { CONST } from '../../Data/constants';
import { PORTFOLIO } from '../../Data/portfolio/portfolio';

const debug = val => {
  console.dir(val);
  return val;
};

const initialState = {
  mobile: CONST.mobile,
  currIndex: 4,
  imgSrc: ABOUT_SLIDER.imgSrc[0],
  PORTFOLIO,
  sliderInfo: ABOUT_SLIDER.sliderInfo[0]
};

const compose = f => g => x => f(g(x));
const succ = ind => ind + 1;
const check = pred => val => val > pred ? 0 : val;

const slImgsCheck = check(ABOUT_SLIDER.imgSrc.length - 1);

//--------------- lenses ---------------------------------
const currIndexLens = R.lensProp('currIndex');
const currIndexView = obj => R.view(currIndexLens, obj);

const currIndexSetter = val => acc => compose(slImgsCheck)(succ)(currIndexView(acc));
const imgSrcSetter = val => acc => R.view(R.lensPath([val, currIndexView(acc)]), ABOUT_SLIDER);
const sliderInfoSetter = imgSrcSetter;

const NEXT_IMAGE_toChange = [
  {val: 'currIndex', func: currIndexSetter}, 
  {val: 'imgSrc', func: imgSrcSetter}, 
  {val: 'sliderInfo', func: sliderInfoSetter}];

export default (state = initialState, action) => 
  R.cond([
      [R.always(R.equals('NEXT_IMAGE')),   R.always(NEXT_IMAGE_toChange.reduce((acc, val) => R.set(R.lensProp(val.val), val.func(val.val)(acc), acc), state))],
      [R.always(R.not(R.equals('NEXT_IMAGE'))), R.always(state)]
    ])(action.type);