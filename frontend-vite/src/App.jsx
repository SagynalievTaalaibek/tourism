import { Route, Routes } from 'react-router-dom';

import { Layout } from './app/layout/layout.jsx';
import About from './app/pages/about/about.jsx';
import Contacts from './app/pages/contacts/contacts.jsx';
import Home from './app/pages/home/home.jsx';
import Tours from './app/pages/tours/tours.jsx';
import NotFound from './components/ui/notfound/notfound.jsx';
import { NAVIGATION } from './shared/constants/constants.js';

const App = () => {
	return (
		<>
			<Layout>
				<Routes>
					<Route path={NAVIGATION.HOME} element={<Home />} />
					<Route path={NAVIGATION.TOURS} element={<Tours />} />
					<Route path={NAVIGATION.ABOUT} element={<About />} />
					<Route path={NAVIGATION.CONTACT} element={<Contacts />} />

					<Route path="*" element={<NotFound />} />
					{/*<Route path="/products/new" element={(
					<ProtectedRoute isAllowed={user && user.role === 'admin'}>
						<NewProduct />
					</ProtectedRoute>
				)} />*/}
				</Routes>
			</Layout>
		</>
	);
};

export default App;
