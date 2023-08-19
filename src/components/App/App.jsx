import { Sidebar } from '../Sidebar';
import st from './App.module.scss';

export const App = () => {
	return (
		<div className={st.App}>
			<Sidebar></Sidebar>
		</div>
	);
};
