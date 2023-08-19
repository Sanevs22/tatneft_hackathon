import { Sidebar } from '../Sidebar';
import { Dashboard } from '../Dashboard';
import { Main } from '../UI/Main';
import st from './App.module.scss';

export const App = () => {
	return (
		<div className={st.App}>
			<Sidebar></Sidebar>
			<Main>
				<Dashboard />
			</Main>
		</div>
	);
};
