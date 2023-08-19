import st from './Toggle.module.scss';

function Toggle({ state, onClick }) {
	return (
		<>
			<div className={state ? st.on : st.off}>
				<div className={st.toggle_body}>
					<div
						className={st.toggle_r}
						onClick={() => {
							onClick(!state);
						}}
					></div>
				</div>
			</div>
		</>
	);
}

export default Toggle;
