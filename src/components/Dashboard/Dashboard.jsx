import st from './Dashboard.module.scss';
import Dns from '../Dns/Dns';

export const Dashboard = () => {
	return (
		<div className={st.main}>
			<Dns />
		</div>
	);
};
