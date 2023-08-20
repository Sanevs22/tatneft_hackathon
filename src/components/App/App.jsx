import { Route, Routes } from 'react-router-dom';
import { Sidebar } from '../Sidebar';
import { Dashboard } from '../Dashboard';
import { Main } from '../UI/Main';
import st from './App.module.scss';
import Demo from '../Demo/Demo';

export const App = () => {
	return (
		<div className={st.App}>
			<Routes>
				<Route
					path='/'
					element={
						<>
							<Sidebar />
							<Main>
								<Dashboard />
							</Main>
						</>
					}
				/>
				<Route path='/' element={<Demo />} />
			</Routes>
		</div>
	);
};
