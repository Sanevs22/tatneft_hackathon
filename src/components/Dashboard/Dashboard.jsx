import st from './Dashboard.module.scss';
import Dns from '../Dns/Dns';

export const Dashboard = () => {
	return (
		<div className={st.main}>
			<Dns number={1} status={5} max={70} />
			<Dns number={2} status={34} max={80} />
			<Dns number={3} status={59} max={90} />
			<Dns number={4} status={82} max={82} />
			<Dns number={5} status={23} max={69} />
			<Dns number={6} status={70} max={78} />
			<Dns number={7} status={13} max={83} />
			<Dns number={8} status={67} max={79} />
		</div>
	);
};
