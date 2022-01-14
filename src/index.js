/*
USED TO RENDER MAIN APP COMPONENT
INTO HTML INDEX FILE.
*/
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// COMPONENTS
import App from './app';

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById('app')
);
