import st from './Toggle.module.scss';

function Toggle({ state, onClick }) {
	return (
		<>
			<div className={state ? st.on : st.off}>
				<div
					onClick={(e) => {
						e.stopPropagation();
						onClick(!state);
					}}
					className={st.toggle_body}
				>
					<div className={st.toggle_r}></div>
				</div>
			</div>
		</>
	);
}

export default Toggle;
