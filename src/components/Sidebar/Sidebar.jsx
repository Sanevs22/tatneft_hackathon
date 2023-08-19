import { UserInfo } from '../UserInfo';
import st from './Sidebar.module.scss';

export const Sidebar = () => {
	return (
		<aside className={st.sidebar}>
			<UserInfo />
		</aside>
	);
};
