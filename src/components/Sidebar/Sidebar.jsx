import { Link } from 'react-router-dom';
import { Info } from '../Info/Info';
import { UserInfo } from '../UserInfo';
import st from './Sidebar.module.scss';

export const Sidebar = () => {
	const btnStyle = {
		background: '#fff',
		border: '1px solid #4fd1c5',
		width: '100%',
		padding: '10px',
		borderRadius: '10px',
		marginTop: '24px',
	};
	return (
		<aside className={st.sidebar}>
			<UserInfo />
			<Info placeholder='Введите текст' />
			<Link to='/demo'>
				<button style={btnStyle}>Demo</button>
			</Link>
		</aside>
	);
};
