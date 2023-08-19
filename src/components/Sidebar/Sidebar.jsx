<<<<<<< HEAD
=======
import { UserInfo } from '../UserInfo';
>>>>>>> 4c290fc (add: user info & user components)
import st from './Sidebar.module.scss';

export const Sidebar = () => {
	return (
		<aside className={st.sidebar}>
			<UserInfo />
		</aside>
	);
};
