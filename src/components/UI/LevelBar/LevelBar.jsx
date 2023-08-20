import st from './LevelBar.module.scss';

function LevelBar({ title, status }) {
	let color = st.g;
	if (status <= 10) {
		color = st.b;
	}
	if (status > 80) {
		color = st.r;
	}

	let level = status < 100 ? 152 - (152 / 100) * status : 0;

	return (
		<div className={st.main}>
			<div className={st.title}> {title}</div>
			<div className={st.status}>
				<div className={st.text}>{Math.round(status)}%</div>
				<div className={st.level + ' ' + color} style={{ top: `${level}px` }}></div>
			</div>
		</div>
	);
}

export default LevelBar;
