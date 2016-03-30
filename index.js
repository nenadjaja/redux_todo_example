import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';

// const store = configureStore();

const $el = document.getElementById('root');

render( 
	<App todos={[{"text": "Lallalalala", "id": 1}]}/>, $el
)