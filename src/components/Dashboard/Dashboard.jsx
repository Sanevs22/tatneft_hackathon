import st from './Dashboard.module.scss';
import Dns from '../Dns/Dns';

function Dashboard() {
	return (
		<div className={st.main}>
			<Dns />
		</div>
	);
}

export default Dashboard;
