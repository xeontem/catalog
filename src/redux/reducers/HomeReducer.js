import Immutable from 'immutable';
import img1 from '../../slider/img1.jpg';
import img2 from '../../slider/img2.jpg';
import img3 from '../../slider/img3.jpg';
import img4 from '../../slider/img4.jpg';


let state = {
  sliderImages: [img1, img2, img3, img4],
  imageIndex: 0,
  imgSrc: img1,
  over: [{color: 'aluteh-purple-back', big: '№1', little: 'на рынке', mainBig: 'Лидерство', mainLittle: 'Группа компаний «АЛЮТЕХ» – лидер рынка роллетных систем, ведущий производитель алюминиевых профильных систем и секционных ворот в Восточной Европе. Группа компаний "АЛЮТЕХ" объединяет 5 производственных предприятий и порядка 20 сбытовых компаний в Чехии, России, Беларуси, Украине, Австрии.'},
         {color: 'aluteh-orange-back', big: '65', little: 'стран мира', mainBig: 'Присутствие', mainLittle: 'Группа компаний «АЛЮТЕХ» – лидер рынка роллетных систем, ведущий производитель алюминиевых профильных систем и секционных ворот в Восточной Европе. Группа компаний "АЛЮТЕХ" объединяет 5 производственных предприятий и порядка 20 сбытовых компаний в Чехии, России, Беларуси, Украине, Австрии.'},
         {color: 'aluteh-blue-back', big: '136', little: 'тыс. м2 пл. производства', mainBig: 'Технологии', mainLittle: 'Собственное производство ГК «АЛЮТЕХ» включает высокотехнологичные экструзионные линии, современное оборудование для порошковой окраски, крупнейший в СНГ комплекс по анодированию алюминиевых профилей, автоматизированные комплексы литья алюминиевых сплавов, роллформинговые линии, ультрасовременный комплекс по окраске и резке алюминиевой ленты и т.д.'},
         {color: 'aluteh-green-back', big: 'EC', little: 'соответствие стандартам', mainBig: 'Качество', mainLittle: 'Высокое качество продукции ALUTECH подтверждено сертификатами западноевропейского образца, протоколами испытаний международных компаний и научно-исследовательских центров. Система менеджмента качества на всех предприятиях сертифицирована на соответствие требованиям международного стандарта ISO 9001 в системе TUV CERT.'}]
}

const initialState = Immutable.Map(state);

export default function HomeReducer(state = initialState, action) {
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
