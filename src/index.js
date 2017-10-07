import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter, browserHistory } from 'react-router-dom';
import App from './App';
import './index.css';

import WebFontLoader from 'webfontloader';
import store from './redux/store';

WebFontLoader.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Material Icons'],
  },
});

ReactDOM.render(
  <Provider store={store}>
  	<BrowserRouter history={browserHistory}>
  		<App />
  	</BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
