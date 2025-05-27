import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App.jsx';
import './index.css';
import { addInterceptors } from './shared/api/axiosApi.js';
import { persistor, store } from './shared/store/store.js';

addInterceptors(store);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</PersistGate>
		</Provider>
	</StrictMode>,
);
