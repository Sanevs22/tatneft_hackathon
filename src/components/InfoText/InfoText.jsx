import st from './InfoText.module.scss';

export const InfoText = ({ header, text }) => {
	return (
		<div className={st.info}>
			<div className={st.header}>{header}</div>
			<div className={st.text}>{text}</div>
		</div>
	);
};
