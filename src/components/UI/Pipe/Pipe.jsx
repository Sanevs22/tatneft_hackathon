import st from './Pipe.module.scss';

function Pipe({ title, status }) {
	let color = st.g;
	if (status <= 10) {
		color = st.b;
	}
	if (status > 80) {
		color = st.r;
	}

	let level = status < 100 ? 200 - (200 / 100) * status : 0;

	return (
		<div className={st.main}>
			<div className={st.title}> {title}</div>
			<div className={st.status}>
				<div className={st.text}>{Math.round(status) > 0 ? Math.round(status) : 0}%</div>
				<div className={st.level + ' ' + color} style={{ right: `${level}px` }}></div>
			</div>
		</div>
	);
}

export default Pipe;
