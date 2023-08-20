import st from './Dashboard.module.scss';
import Dns from '../Dns/Dns';

export const Dashboard = () => {
	return (
		<div className={st.main}>
			<Dns status={5} max={70} />
			<Dns status={34} max={80} />
			<Dns status={59} max={90} />
			<Dns status={82} max={82} />
			<Dns status={23} max={69} />
			<Dns status={70} max={78} />
			<Dns status={13} max={83} />
			<Dns status={67} max={79} />
		</div>
	);
};
