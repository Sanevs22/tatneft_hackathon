import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { App } from './components/App';
import Demo from './components/Demo/Demo';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />} />
				<Route path='/demo' element={<Demo />} />
			</Routes>{' '}
		</BrowserRouter>
	</React.StrictMode>
);
