import { Route, Routes } from 'react-router-dom';

import { Layout } from './app/layout/layout.jsx';
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
