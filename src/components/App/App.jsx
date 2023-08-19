import { Sidebar } from '../Sidebar';
import st from './App.module.scss';
import Dashboard from '../Dashboard/Dashboard';

export const App = () => {
	return (
		<div className={st.App}>
			<Sidebar></Sidebar>
			<Dashboard />
		</div>
	);
};
